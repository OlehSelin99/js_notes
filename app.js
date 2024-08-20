/* theory
// const array = [1, 2, 3, 4, 5, 61];
//  console.log(array.length);
// console.log(array[10]);
// console.log(array[array.length - 1]); // array[6 - 1]
// array[0] = "hello";
// console.log(array);
// array[array.length] = 'Oleh'
// console.log(array);
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

/* console.log(inputElement.value)

// const notes = ["Go to the Ihor", "Watch finale of Euro 2024", "Pictures for Danylo"];

// function render() {
//   for (let note of notes)
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
// }

// render();

// function getNoteTemplate(title) {
//   return `<li
//          class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`;
// }

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
// };
*/

const notes = [
  { title: "Pictures", completed: true },
  { title: "Sleep", completed: false },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "No Elements";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render(); // 1

listElement.onclick = function (event) {
  if (event.target.dataset) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
      console.log("toggle", index);
    } else if (type === "remove") {
      notes.splice(index, 1);
      console.log("remove", index);
    }
    render();
  }
};

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  listElement.value = "";
};

function getNoteTemplate(note, index) {
  // console.log(index);
  return `<li
         class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class = ${
            note.completed ? "text-decoration-line-through" : ""
          }>${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
          </span>
        </li>`;
}
