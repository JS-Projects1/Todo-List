var input = document.getElementById("input");
var btn = document.getElementById("btn");
var con = document.getElementById("tasks");

var tasks = [
  // { id: 1, task: "task 1" },
  // { id: 2, task: "task 2" },
  // { id: 3, task: "task 3" },
];

function Draw(data) {
  con.innerHTML = ""; 

  if (tasks.length == 0) {
    con.innerHTML = ` 
      <img
        src="images/undraw_to_do_list_re_9nt7 (1).svg"
        width="100%"
        height="100%"
        class="position-absolute bottom-0"
      ></img>`;
  } else {
    data.map((item) => {
      con.innerHTML += `
        <div class="col-12 d-flex justify-content-between align-items-baseline">
          <p>${item.task}</p>
          <i class="fa fa-trash-o" onclick="Delete(${item.id})"></i>
        </div>`;
    });
  }
}


Draw(tasks);

btn.onclick = function () {
  if (input.value === "") {
    alert("you should enter your data");
  } else {
    var value = input.value;
    var lastId;
    if (tasks.length == 0) {
      lastId = 0;
    } else {
      lastId = tasks[tasks.length - 1].id;
    }
    tasks.push({ id: lastId + 1, task: value });
    Draw(tasks);
    input.value = "";
    input.focus();
  }
};

function Delete(id) {
  console.log(id);

  const index = tasks
    .map((item) => {
      return item.id;
    })
    .indexOf(id);
  tasks.splice(index, 1);
  Draw(tasks);
}
