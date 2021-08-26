 var value=[ ]  
function myFunction(){
    const a={};
       a['firstname'] = document.getElementById('firstname').value
       a['lastname'] = document.getElementById('lastname').value
       a ['age']= document.getElementById('age').value
       a ['address']= document.getElementById('address').value
     value.push(a)
     console.log(value)
     var list = document.createElement("li");
     list.innerHTML = value;
     document.getElementById("myUL").appendChild(list);
}
  function clrfrm() {
    document.getElementById("Form").reset();
}
