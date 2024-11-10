function checkPassword() {
    const password = document.getElementById("password").value;
    const passwordView = document.getElementById("password");
    const modal = document.getElementById("container");

    if (!password) {
        alert("! Enter Password."); // Perform action if password is entered
    } else  if(password==="MySupport@123"){
        modal.style.display = "flex"; // Show modal if password is empty
        passwordView.style.display = "none"; // Show modal if password is empty
    }else{
        alert("! Wrong password")
    }
  }

  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
  }

  // Close modal if user clicks outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };