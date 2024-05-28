
const DISABLE_BUTTON_STYLE = "bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed focus:outline-none focus:shadow-outline"
const ENABLE_BUTTON_STYLE = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// crear la lista que gestionara las tareas
const  tasklist = [];

// crear la clase
class Task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.completed = false;
    }
    toggleCompetion() {
        this.completed = !this.completed;  // intercambia el estado
    }
}

const addTask = (e) => {
    
    e.preventDefault(); // necesita el event en el index
    let name = document.getElementById("task_name").value;
    let description = document.getElementById("task_description").value;
    
    const task = new Task(name, description);

    tasklist.push(task);
    // alert('La tarea fe agregada con exito.');

    console.log(tasklist);
    showTasks();
}

const showTasks = () => {
    const tableTaskBody = document.getElementById("table_task_body");
    tableTaskBody.innerHTML = "";
    tasklist.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>
            <a href = "#" onclick = "deleteTask(${index})">eliminar</a> |
            <a href="#" onclick="editTask(${index})">editar</a>
        </td>
        `;
        tableTaskBody.appendChild(row);
    })

}

const deleteTask = (index) => {
    // Validar que el indice es valido
    if (index >= 0 && index < tasklist.length){
        tasklist.splice(index, 1);
        alert('La tarea fue eliminada.')
    }
    else{
        alert('La tarea no existe.')
    }

    showTasks();
}


const editTask = (index) => {
    // Cambiar acciones y estilos de los botones

    let addTaskButton = document.getElementById("add_task_button");
    addTaskButton.setAttribute("disabled","");
    addTaskButton.setAttribute("class",DISABLE_BUTTON_STYLE)
    let updateTaskButton = document.getElementById("update_task_button");
    updateTaskButton.removeAttribute("disabled");
    updateTaskButton.setAttribute("class",ENABLE_BUTTON_STYLE)
    // Asignar los valores a los cuadros de texto
    let nameText = document.getElementById("task_name");
    let descriptionText = document.getElementById("task_description");

    const task = tasklist[index]
    nameText.value = task.name;
    descriptionText.value = task.description;

    updateTaskButton.addEventListener(updateTask(Event, index));
}

const updateTask = (index)=>{

    debugger;
    // tomar los valores de los cuadros de texto y actualizarlos en la lista
    // cambiar los estilos y de los botones
}