const sum=(x,y)=>x+y;

const res=(x,y)=>x-y;

const mult=(x,y)=>x*y;

const div=(x,y)=>x/y;

const calc=(x,y,callback)=>{
    console.log(callback(x,y));
}

calc(5,4,div);


const fecha=()=>{
    console.log(new Date)
};

const nuevaFecha=(callback)=>{
    console.log(new Date);
    setTimeout(() => {
        callback();
    }, 3000);
}

nuevaFecha(fecha);


let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
const API_URL='https://rickandmortyapi.com/api/character';

function fetch (url,callback){
    const Xhttp= new XMLHttpRequest();
    Xhttp.open('GET',url);
    Xhttp.onreadystatechange = function (event){
        if(Xhttp.readyState===4){
            if(Xhttp.status===200){
                callback(null,JSON.parse(Xhttp.responseText))
            }else{
                const error=new Error('Error'+url_api);
                return callback(error,null)
            }
        }
    }
    Xhttp.send()
};

fetch(API_URL,(error1,data1)=>{
    if(error1){return console.error(error1)}
    fetch(API_URL+'/'+data1.results[0].id,(error2,data2)=>{
        if(error2){return console.error(error2)}
        fetch(data2.origin.url,(error3,data3)=>{
            if(error3){return console.error(data3)};
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})