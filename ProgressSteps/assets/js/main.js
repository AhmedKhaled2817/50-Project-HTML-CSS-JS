const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let currentActive=1;
next.addEventListener('click',()=>{
    currentActive++;
    if (currentActive>circles.length){
        currentActive=circles.length;
    }
    update();
});

prev.addEventListener('click',()=>{
    currentActive--;
    if (currentActive<1){
        currentActive=1;
    }
    update();

});

function update(){
    circles.forEach((circle,index)=>{
        if (index<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');}
    })

    const actives=document.querySelectorAll('.active');

    if (window.innerWidth > 380) {
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        progress.style.height = '3px';
    } else {
        progress.style.height = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        progress.style.width = '3px';       
    }
    
    if (currentActive===1){
        prev.disabled=true;
    }
    else if (currentActive===circles.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }

    document.getElementById('step-counter').innerText = `Step ${currentActive} of ${circles.length}`;
}
window.addEventListener('resize', update);
