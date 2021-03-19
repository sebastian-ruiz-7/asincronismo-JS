const doSomethingAsyn=()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => {resolve('Do something Async')}, 2000)
            :reject(new Error('Test Error'))
    })
}

const doSomething=async()=>{
    const something=await doSomethingAsyn()
    console.log(something);
}


const anotherFunction= async()=>{
    try{
    const something=await doSomethingAsyn()
    console.log(something)
    }catch{
        console.error(error)
    }
}

console.log('Before');
anotherFunction();
console.log('After');
