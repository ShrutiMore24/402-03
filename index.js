
    let input1=document.getElementById("input");
    
    let ul=document.getElementById("additems");
    function added(){
        
        let input=document.getElementById("input").value;
        var li=document.createElement("li");
        li.setAttribute("id","liList");
        var innerdiv=document.createElement("div");
    innerdiv.classList.add("innerdiv");
   
    li.style.padding="1rem";
    let button =document.createElement("button");
    button.style.width="100px";
    button.style.height="25px";

    
    button.innerText="Delete";
    button.setAttribute("onclick","delete1(this)");
    let liNode=document.createTextNode(input);
    li.appendChild(liNode);
    li1=li.innerText;
    innerdiv.appendChild(li);
    innerdiv.appendChild(button);
    ul.appendChild(innerdiv);
    
    input1.value=" ";
    // 

}
    function delete1(ref){
        // console.log();
        ref.parentElement.remove();
    }