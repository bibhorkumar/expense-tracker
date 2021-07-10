var table = document.getElementsByTagName("table");
var dataHtml = "";
var total = 0;

document.getElementById("submit").addEventListener("click", submitFunction);

function submitFunction(e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var date = document.getElementById("date-input").value;
  var amount = document.getElementById("amount-input").value;
  total += parseInt(amount);

  if (name !== "" && date !== "" && amount !== "") {
    createTable(name, date, amount);
    totalAmount();
  } else {
    alert("Fill in the details");
  }
  resetFunc();

  return false;
}

function resetFunc() {
  document.getElementById("expense-info").reset();
}

function createTable(name, date, amount) {
  const tableBody = document.getElementById("table-body");
  var delButton = document.createElement("button");
  delButton.innerHTML = "X";
  delButton.setAttribute("class", "delete-button");
  // dataHtml += `<tr><td>${name}</td><td>${date}</td><td>${amount}</td><td><button class="delete-button">X</button></td></tr>`;
  // tableBody.innerHTML=dataHtml;

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  td1.innerHTML = name;
  td2.innerHTML = date;
  td3.innerHTML = amount;
  td4.appendChild(delButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  tableBody.insertBefore(tr, tableBody.firstChild);

  var btnList = document.getElementsByClassName("delete-button");

  var delBtnArray = [...btnList];

  for (let item of delBtnArray) {
    item.addEventListener("click", function (e) {
      e.currentTarget.parentNode.parentNode.remove();
    });
  }

  // Array.prototype.slice.call(btnList).forEach(function(item){             another method to convert and loop on HTML collections object
  //         item.addEventListener("click",function(e){
  //             console.log(e.currentTarget.parentNode.parentNode);
  //             e.currentTarget.parentNode.parentNode.remove();

  //         });
  //     });
}

function totalAmount() {
  document.getElementById("total-amount").innerHTML = total;
}
