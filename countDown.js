function countDownFromSum(num1, num2){
    let sum = num1 + num2;
    let countDown = setInterval(()=> {
        sum--
        console.log(sum)
        if(sum===0){
            clearInterval(countDown)
        }
    }, 1000)
}

countDownFromSum(5, 10)