// const postButton = document.getElementById('btnpost');

// postButton.addEventListener('click', goBack);

// function goBack() {
//   window.history.back();
// }

const form = document.getElementById("postForm");
const formData = new FormData(form);

document.getElementById("btnpost").addEventListener("click", () => {
  // Perform form submission here using `formData`
});

const backButton = document.getElementById("backButton");
backButton.addEventListener("click", goBack);

function goBack() {
  window.history.back();
}