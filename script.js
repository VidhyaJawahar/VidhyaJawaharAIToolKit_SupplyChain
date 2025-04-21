<!-- script.js -->
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  document.getElementById("response").innerText = `Thank you, ${name}! Your feedback has been received.`;
  this.reset();
});
