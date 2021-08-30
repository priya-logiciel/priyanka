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
  
        //  remove remove button
        var remove = document.createElement("button");
        var eText = document.createTextNode("remove");
        remove.appendChild(eText);
        remove.className ="remove";
        remove.appendChild(eText);
        list.appendChild(remove);

        //  edit remove button
        var edit= document.createElement("button");
        var eText = document.createTextNode("edit");
        edit.appendChild(eText);
        edit.className ="edit";
        edit.appendChild(eText);
        list.appendChild(edit);
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