advButton = document.querySelector(".main-content-adv")
list = document.querySelector(".main-content-ul")
i = 0

advButton.addEventListener("click",function(){
    if(i == 0){
        i = 1 
        list.style.maxHeight = "10000000px"
    } else{
        i = 0
        list.style.maxHeight = "200px"
    }
})