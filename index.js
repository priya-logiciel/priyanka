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
     var g = '<div></div>'
     list.innerHTML = "Firstname_" +a.firstname + "<br>" +"Lastname_" +a.lastname + "<br>" +"Age_" +a.age + "<br>" +"Address_" +a.address;
     document.getElementById("myUL").appendChild(list);
    }
  //clear button
  function clrfrm() {
    document.getElementById("Form").reset();
}
  //validation function
  function validateForm(){
  var fname  = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var age = document.getElementById('age');
  var address= document.getElementById('address');
  if(e == ""){
    alert("name must be filled out")
  }
  else if (b == ""){
     alert("not valied")
  }
  else if ( c == ""){
      alert("data is not valied")
  }
  else if (d == ""){
       alert("must be not out filed")
  }else{

     }
       
  }