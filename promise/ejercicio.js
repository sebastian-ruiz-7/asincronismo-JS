const algoVaAPasar= ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey');
        }else{
            reject('Nel');
        }
    });
};


// algoVaAPasar()
//     .then(response=>console.log(response))
//     .catch(err=>console.error(err));



const algoVaAPasar2=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(() => {
                resolve('Se pudo')
            }, 2000);
        }else{
            reject('Nel')
        }
    })
}

// algoVaAPasar2()
//     .then(response=>console.log(response))
//     .catch(err=>console.error(err));


Promise.all([algoVaAPasar(),algoVaAPasar2()])
    .then(response=>console.log('Array de resultados',response))
    .catch(err=>console.error(err))