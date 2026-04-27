
const form = document.querySelector(".contact-form");
const success = document.querySelector(".form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    form.style.display = "none";
    success.style.display = "block";
  }
});