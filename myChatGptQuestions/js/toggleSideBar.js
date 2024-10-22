import { toggleDraggable } from "./letterFocus-myChatGpt.js";
const draggable = document.querySelector('.draggable')
toggleSideBtn.onclick = toggleSideBar

function toggleSideBar(){
    draggable.classList.toggle('active')
}