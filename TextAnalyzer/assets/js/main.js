const descriptionBtn=document.querySelector(".description");
const resetBtn=document.getElementById("resetBtn");

// create a function analyzeText
function analyzeText(){
    const msg=document.getElementById("msg").value.trim();
    const words=msg.split(/\s+/).filter(word => word.length>0);
    if (words.length===0){
        alert("Enter Plz A Valid Text ");
        return ;
    }
    document.getElementById("totalWords").textContent=words.length;
    document.getElementById("totalChar").textContent=msg.length;
    document.getElementById("textUpperCase").textContent=msg.toUpperCase();
    document.getElementById("textLowerCase").textContent=msg.toLowerCase();
}

// reset input

function resetInput(){
    document.getElementById("msg").value="";
    document.getElementById("totalWords").textContent="";
    document.getElementById("totalChar").textContent="";
    document.getElementById("textUpperCase").textContent="";
    document.getElementById("textLowerCase").textContent="";   
}

descriptionBtn.addEventListener("click",analyzeText);
resetBtn.addEventListener("click",resetInput);