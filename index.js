var editId = null;
var numberPerPage = 5;
var currentPage = 1;
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
  {
    address: "Metro",
    age: "19",
    fname: "priyanka",
    id: 4,
    lname: "Kumari",
  },
  {
    address: "Jasiya",
    age: "24",
    fname: "geeta",
    id: 5,
    lname: "Kumari",
  },
  {
    address: "Tajpur",
    age: "25",
    fname: "Ronit",
    id: 6,
    lname: "kumar",
  },
  {
    address: "Metro",
    age: "22",
    fname: "Priyanka",
    id: 7,
    lname: "yadav",
  },
  {
    address: "Jasiya",
    age: "25",
    fname: "Shiva",
    id: 8,
    lname: "Kumar",
  },
  {
    address: "Tajpur",
    age: "26",
    fname: "Rinku",
    id: 9,
    lname: "kumar",
  },
  {
    address: "Tajpur",
    age: "27",
    fname: "Rohan",
    id: 10,
    lname: "kumar",
  },
];
//load function
function loadData() {
  var Listrender;
  var begin = (currentPage - 1) * numberPerPage;
  var end = begin + numberPerPage;
  Listrender = value.slice(begin, end);
  document.getElementById("list").innerHTML = null;
  Listrender.forEach((item) => {
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
    //edit button
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
  document.getElementById("currentPage").innerText =
    "currentPage=" + currentPage;
  check();
}
// add function
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
    editId = null;
    loadData();
  } else {
    b.id = value.length + 1;
    value.push(b);
    console.log(value);
    if (numberPerPage * currentPage >= value.length) {
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
      //edit button
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
  }
  //clear
  check();
  document.getElementById("form1").reset();
}
//delate function
function deleteList(id) {
  let index = value.findIndex((el) => el.id == id);
  value.splice(index, 1);
  loadData();
  //var delList = document.getElementById("list");
  //delList.removeChild(delList.childNodes[index]);
}
//edit function
var selectedListItem = null;
function editList(id) {
  let index = value.findIndex((el) => el.id == id);
  document.getElementById("fname").value = value[index].fname;
  document.getElementById("lname").value = value[index].lname;
  document.getElementById("age").value = value[index].age;
  document.getElementById("address").value = value[index].address;
  editId = id;
  loadData();
}
// clear function
function clrfrm() {
  document.getElementById("form1").reset();
}
//validation function
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
//search function
function Search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//pagination function
function nextPage() {
  currentPage += 1;
  loadData();
}
function previousPage() {
  currentPage -= 1;
  loadData();
}
function check() {
  document.getElementById("previous").disabled =
    currentPage == 1 ? true : false;
  document.getElementById("next").disabled =
    numberPerPage * currentPage < value.length ? false : true;
}
