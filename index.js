// Obtinem referintele la elementele HTML relevante

const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");
const newTask = document.getElementById("newTask");

//  Adaugam ascultatori pentru evenimentele pe butoane si input

submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", handleTaskClick);
clearButton.addEventListener("click", clearList);
newTask.addEventListener("keydown", handlerInputKeydown);

// Mesaje pentru interactiunea cu utilizatorul

const greetingMessage = "Good, you have no tasks today!";
const taskMessage = "Your tasks for today:";

// Initializam mesajul de bun venit

displayMessage(greetingMessage);

// Functie pentru setergerea intregii liste de task-uri

function clearList() {
  const taskList = tasks.getElementsByClassName("list-group-item");
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage(greetingMessage); // Afisam mesajul de bun venit dupa stergere
}

// Functie pentru marcarea/demarcarea unui task finalizat

function handleTaskClick(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

// Functie pentru adaugarea unui task in lista de task-uri

function addTask() {
  const newTask = document.getElementById("newTask");
  if (inputIsValid(newTask.value)) {
    // Verificăm dacă lista de task-uri este goală și adăugăm mesajul înainte de primul task
    if (tasks.getElementsByClassName("list-group-item").length === 0) {
      tasks.innerHTML += '<li class="list-group-item">' + taskMessage + "</li>";
    }
    //   Adaugam noul task
    tasks.innerHTML += '<li class="list-group-item">' + newTask.value + "</li>";
    newTask.value = "";
    messageElement.style.visibility = "hidden"; // Ascundem mesajul de eroare (dacă există)
  } else {
    displayMessage("Please provide non empty input!"); // Afișăm mesaj de eroare
  }
}

// Functie pentru gestionarea apasarii taste Enter in campul de input

function handlerInputKeydown(event) {
  if (event.keyCode === 13) {
    // Verificăm dacă tasta apăsată este Enter (codul 13)
    addTask(); // Apeleză funcția addTask pentru a adăuga task-ul
  }
}

// Functie pentru afisarea mesajelor catre utilizator

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
  // Afișăm mesajul setând vizibilitatea la "visible"
}

// Functie pentru validarea input-ului

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}
