const displayData=(arg)=>{
    result.value +=arg
}

const clearValues = ()=>{
    result.value =""
}

const delLastValue =() =>{
    result.value =result.value.slice(0,-1)
}

const calResult =() =>{

    try{
        result.value =eval(result.value)
}
catch{
    result.value="Invalid expression!!!!"
}

    }

