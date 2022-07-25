const modalBackground = document.getElementById("m-background");
const modalForeground = document.getElementById("modal");

const modalAdd = document.getElementById("modal-add");
const addTask = document.getElementById("add-task");

const radioButtons = document.querySelectorAll(".radio");

const taskEntry = document.querySelector(".entry");

const colDaily = document.querySelector(".daily")
const colMonthly = document.querySelector(".monthly")
const colLife = document.querySelector(".overall")

let taskTime = "";

let tempTask = {};



modalBackground.addEventListener("click",displayNone);

function displayNone(){

    modalBackground.style.display = "none"
    modalForeground.style.display = "none"

}

addTask.addEventListener("click",displayOn);

function displayOn(){

    modalBackground.style.display = "flex"
    modalForeground.style.display = "flex"
   
}

class Task{

    constructor(task,time){

        this.task = task;
        this.time = time;
    }

    getTime(){
        return this.time;
    }

    getTask(){
        return this.task;
    }

}


modalAdd.addEventListener("click", newTask);

function newTask(){

    let taskDesc = taskEntry.value;

    radioButtons.forEach(checkEach);

    tempTask = new Task(taskDesc,taskTime);

    newCard = document.createElement("div");

    newCard.textContent = taskDesc;

    newCard.classList.add("card");

    displayNone();







    switch(taskTime){

        case "daily": colDaily.appendChild(newCard);
            break;

        case "monthly": colMonthly.appendChild(newCard);
            break;


        case "life": colLife.appendChild(newCard);
            break;

    }

    }


function checkEach(radio){
    
    if(radio.checked){

        taskTime = radio.value;
        
    }

}

