var editId = null;
var value = [
  {
    address: "Metro",
    age: "17",
    fname: "Prince",
    id: 1,
    lname: "Kumar",
  },
  {
    address: "Jasiya",
    age: "22",
    fname: "Shivam",
    id: 2,
    lname: "Kumar",
  },
  {
    address: "Tajpur",
    age: "23",
    fname: "Rohit",
    id: 3,
    lname: "kumar",
  },
];

function loadData() {
  value.forEach((item) => {
    var newElement = document.createElement("li");
    newElement.setAttribute("style", "border:1px solid");
    var divEle = document.createElement("div");
    divEle.innerHTML =
      "Firstname-" +
      item.fname +
      "<br>" +
      "Lastname-" +
      item.lname +
      "<br>" +
      "Age-" +
      item.age +
      "<br>" +
      "Address-" +
      item.address +
      "<br>";
    // <button onClick=editList("+ item.id +")>Edit</button><button onClick=deleteList("+ item.id +")>delete</button>
    let editbutton = document.createElement("button");
    editbutton.innerText = "Edit";
    editbutton.addEventListener("click", function () {
      editList(item.id);
    });
    //delete button
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.addEventListener("click", function () {
      deleteList(item.id);
    });
    deletebutton.setAttribute("onclick", "delete(" + item.id + ")");
    newElement.appendChild(divEle);
    newElement.appendChild(editbutton);
    newElement.appendChild(deletebutton);
    document.getElementById("list").appendChild(newElement);
  });
}
function add() {
  const b = {};
  b["fname"] = document.getElementById("fname").value;
  b["lname"] = document.getElementById("lname").value;
  b["age"] = document.getElementById("age").value;
  b["address"] = document.getElementById("address").value;
  if (editId) {
    let index = value.findIndex((el) => el.id == editId);
    console.log(index);
    value[index] = b;
    value[index].id = editId;
    document.getElementById("list").childNodes[index].childNodes[0].innerHTML =
      "Firstname-" +
      b.fname +
      "<br>" +
      "Lastname-" +
      b.lname +
      "<br>" +
      "Age-" +
      b.age +
      "<br>" +
      "Address-" +
      b.address +
      "<br>";
    editId = null;
  } else {
    b.id = value.length + 1;
    value.push(b);
    console.log(value);
    var newElement = document.createElement("li");
    newElement.setAttribute("style", "border:1px solid");
    var divEle = document.createElement("div");
    divEle.innerHTML =
      "Firstname-" +
      b.fname +
      "<br>" +
      "Lastname-" +
      b.lname +
      "<br>" +
      "Age-" +
      b.age +
      "<br>" +
      "Address-" +
      b.address +
      "<br>";
    //<button onClick=editList()>Edit</button><button onClick=deleteList("+ b.id +")>delete</button>";
    let editbutton = document.createElement("button");
    editbutton.innerText = "Edit";
    editbutton.addEventListener("click", function () {
      editList(b.id);
    });
    //delete button
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.addEventListener("click", function () {
      deleteList(b.id);
    });
    deletebutton.setAttribute("onclick", "delete(" + b.id + ")");
    newElement.appendChild(divEle);
    newElement.appendChild(editbutton);
    newElement.appendChild(deletebutton);
    document.getElementById("list").appendChild(newElement);
  }

  document.getElementById("form1").reset();
}
function deleteList(id) {
  let index = value.findIndex((el) => el.id == id);
  value.splice(index, 1);
  var delList = document.getElementById("list");
  delList.removeChild(delList.childNodes[index]);
}

var selectedListItem = null;
function editList(id) {
  let index = value.findIndex((el) => el.id == id);
  document.getElementById("fname").value = value[index].fname;
  document.getElementById("lname").value = value[index].lname;
  document.getElementById("age").value = value[index].age;
  document.getElementById("address").value = value[index].address;
  editId = id;
}

function clrfrm() {
  document.getElementById("form1").reset();
}
//search button function
function Search() {
  var list3 = document.getElementById("myInput");
  document.getElementById("list").innerHTML = list3.value;
}

function validateForm() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var age = document.getElementById("age");
  var address = document.getElementById("address");
  if (fname.value == "") {
    alert("Input Field Firstname  Empty.");
  } else if (lname.value == "") {
    alert("Input Field Lastname Empty.");
  } else if (age.value == "") {
    alert("Input  Field Age Empty.");
  } else if (address.value == "") {
    alert("Input Field  Address Empty.");
  } else {
    add();
  }
}
