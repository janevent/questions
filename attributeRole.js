function addAttributeRole(){
    let headers = document.getElementsByClass('header')
    headers.forEach(h => {
        if(h.childNodes.length === 0){
            h.setAttribute('role', 'presentation')
        }
    })
}