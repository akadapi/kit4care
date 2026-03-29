const form = document.querySelector("#waitlist-form");
const feedback = document.querySelector("#form-feedback");

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const entry = Object.fromEntries(formData.entries());

    localStorage.setItem("kit4care-waitlist", JSON.stringify(entry));
    feedback.textContent = `Thanks, ${entry.name || "friend"}! You're on the kit4care waitlist for ${entry.interest || "our launch collection"}.`;
    form.reset();
  });
}
