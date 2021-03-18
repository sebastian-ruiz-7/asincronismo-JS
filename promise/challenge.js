let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;

const URL_API='https://rickandmortyapi.com/api/character';

const fetchData=(url_api)=>{
    return new Promise((resolve,reject)=>{
        const xhttp=new XMLHttpRequest();
        xhttp.open('GET', url_api,true);
        xhttp.onreadystatechange =()=>{
            if(xhttp.readyState===4){
                if(xhttp.status===200){
                    resolve(JSON.parse(xhttp.responseText))
                }else{
                    reject(new Error('Error',URL_API))
                }
            }
        }
        xhttp.send()
    })
    
}


fetchData(URL_API)
    .then(
        data1=>{
            console.log(data1.info.count);
            return fetchData(URL_API+'/'+data1.results[0].id)
                })

    .then(
        data2=>{
            console.log(data2.name);
            return fetchData(data2.origin.url)   
        })
    
    .then(
        data3=>{
            console.log(data3.dimension);
        });