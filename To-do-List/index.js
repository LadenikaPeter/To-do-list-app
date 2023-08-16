let button = document.getElementById("button");
let close = document.getElementsByClassName("close");

//to create the list elements
button.addEventListener("click", () => {
  let list = document.createElement("li");
  let list_item = document.getElementById("list_input").value;
  let text_node = document.createTextNode(list_item);
  list.appendChild(text_node);

  if (list_item === "") {
    alert("please enter your desired task");
  } else {
    document.getElementById("my_list").appendChild(list);
    document.getElementById("list_input").value = "";
  }

  let span = document.createElement("span");
  span.className = "close";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  span.appendChild(icon);
  list.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let trash_list = this.parentElement;
      trash_list.style.display = "none";
    };
  }

  //   console.log(close.length);
});

//to toggle between the checked and unchecked
let task = document.querySelector("ul");
task.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
