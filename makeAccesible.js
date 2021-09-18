let divEl = document.getElementById('divElement');
divEl.addEventListener('click', doSomething);
divEl.addEventListener('keydown', (event) => {
    if(event.code=== 'space' || event.code === 'enter'){
        doSomething()
        // or divEl.click()
    }
})
function doSomething(){
    let secretEl = document.getElementById('secretEl');
    let secretElDisplay = secretEl.style.display
    if(secretElDisplay === 'none'){
        secretElDisplay = 'block';
    }else{
        secretElDisplay = 'none';
    }
}