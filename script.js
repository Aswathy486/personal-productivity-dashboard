const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning ☀️";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon 🌤️";
} else {
    greeting.textContent = "Good Evening 🌙";
}
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    li.addEventListener("click", function () {
    li.remove();
});
}