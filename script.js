const form = document.querySelector("#order-request-form");
const feedback = document.querySelector("#form-feedback");

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const entry = Object.fromEntries(formData.entries());

    localStorage.setItem("kit4care-order-request", JSON.stringify(entry));
    feedback.textContent = `Thanks, ${entry.name || "friend"}! We saved your request for ${entry.quantity || "1 item"} of ${entry.interest || "our collection"} and will follow up soon.`;
    form.reset();
  });
}
