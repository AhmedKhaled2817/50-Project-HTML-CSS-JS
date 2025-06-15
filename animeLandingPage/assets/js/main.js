let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');

let carouselDom=document.querySelector('.carousel');
let sliderDom=carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom=document.querySelector('.carousel .thumbnail');
let thumbnailItemDom=thumbnailBorderDom.querySelectorAll('.item');

let timeDom=document.querySelector('.carousel .time');


let timeRunning=2000;
let runTimeOut;


function showSlider(type){
    let SliderItemDom=sliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemDom=document.querySelectorAll('.carousel .thumbnail .item');

    if(type==='next'){
        sliderDom.appendChild(SliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
        carouselDom.classList.add('next');
    }
    else{
        sliderDom.prepend(SliderItemDom[SliderItemDom.length -1]);
        thumbnailBorderDom.prepend(thumbnailItemDom[thumbnailItemDom.length -1 ]);
        carouselDom.classList.add('prev');
    }

    runTimeOut=setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');        
        clearTimeout(runTimeOut);
    },timeRunning);
}

nextBtn.addEventListener('click',()=>{
    showSlider('next');
})

prevBtn.addEventListener('click',()=>{
    showSlider('prev');
})
