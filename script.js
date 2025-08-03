document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page from refreshing

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email.includes("@") || !message) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Show the toast message
  const toast = document.getElementById("toast");
  toast.style.display = "block";

  // Clear the form
  this.reset();

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
});
