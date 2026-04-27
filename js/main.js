const form = document.querySelector(".contact-form");
const success = document.querySelector(".form-success");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.style.display = "none";
      success.style.display = "block";
    }
  });
}

const quotes = document.querySelectorAll(".quote");

if (quotes.length > 0) {
  let index = 0;

  setInterval(() => {
    quotes[index].classList.remove("active");
    index = (index + 1) % quotes.length;
    quotes[index].classList.add("active");
  }, 3000);
}