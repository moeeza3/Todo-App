function todo(){
    let c=document.getElementById("viewHere").value;
    if(c==""){
      console.log("Empty");
    }else{
      document.getElementById("viewHere").value="";
    
      let li=document.createElement("li");
    
       li.textContent=c;

      let span=document.createElement("span");
      
      let edit=document.createElement("a");
      let editicon=document.createElement("i");
    
      editicon.setAttribute("class","fa-solid fa-pencil");
      edit.appendChild(editicon);
      edit.addEventListener("click",function(){
          li.setAttribute("contenteditable","true");
          edit.setAttribute("contenteditable","false");
          cancel.setAttribute("contenteditable","false");
          
      });
      li.addEventListener("mouseleave",function(){
        li.setAttribute("contenteditable","false");
      });

      let cancel=document.createElement("a");
      let cicon=document.createElement("i");

      cicon.setAttribute("class","fa-solid fa-xmark");
     
      cancel.appendChild(cicon);
     
 
    cancel.addEventListener("click",function(){
      listupdate.removeChild(li);
      listupdate.removeChild(span);
    });
      let listupdate=document.getElementById("listupdate");
      listupdate.appendChild(li);
      listupdate.insertBefore(li,listupdate.children[0]);
   
      li.insertAdjacentElement("afterend",span);
      span.appendChild(edit);
      span.appendChild(cancel);
     
    }
    }
