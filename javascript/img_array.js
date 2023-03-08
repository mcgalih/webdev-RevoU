var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("home_photo");
    console.log(imgList);
    if(n > imgList.length) {slideIndex = 1};
    // console.log(slideIndex);
    if(n < 1) {slideIndex = imgList.length};
    //onsole.log(slideIndex);
    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
    
}

setInterval(() => {
    plusDivs(1);
}, 2000);