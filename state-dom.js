let tasks = [
  { text: "first task", status: true },
  { text: "second task", status: false },
  { text: "third task", status: true },
  { text: "fourth task", status: true },
  { text: "fifth task", status: false },
];


const div = document.querySelector("#list");

const render = () => {
    console.log(tasks)

    div.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement("div");
    const del = document.createElement("button");
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.checked = tasks[i].status
    del.textContent = "delete";
    del.style.color="white"
    
    
    
    
    
    item.append(checkbox)
    item.append(tasks[i].text)
    item.append(del);
    div.append(item);
    item.style.marginBottom="12px"
    item.style.marginTop="5px"
    del.addEventListener("click", (e) => {
      remove(i)
    });
    checkbox.addEventListener("change",()=>{
        checkToDo(i)
    })

  }
};
const remove = (index) => {
  tasks.splice(index, 1);
  render();
};

const btn = document.querySelector("#button");
const inp = document.querySelector("#input");

const addTodo = () => {
  tasks.push({ text: inp.value, status: false });
  render();
};

const checkToDo=(index)=>{
    tasks[index].status=!tasks[index].status

render()
}



btn.addEventListener("click", () => {
  addTodo();
  inp.value = "";
});

render()