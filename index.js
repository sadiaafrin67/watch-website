
const func = () =>{
    let a = new Date()
    
    document.getElementById('clock').innerHTML = a.toLocaleTimeString()
    
    
}

let timeSetInterval

const start = () => {
    
    timeSetInterval = setInterval(func, 1000)
}
const stop = () => {
    
     clearInterval(timeSetInterval)
}

timeSetInterval = setInterval(func, 1000)

func()