const descriptionBtn=document.querySelector(".description");

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
descriptionBtn.addEventListener("click",analyzeText);
