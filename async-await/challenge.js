let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;

const URL_API='https://rickandmortyapi.com/api/character/';

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

const anotherFunction=async(url)=>{
    try{
        const data=await fetchData(url);
        const character=await fetchData(url+data.results[0].id);
        const origin=await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch(error){
        console.error(error)
    }
}

anotherFunction(URL_API)