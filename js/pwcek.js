function checkPassword() {
      const input = document.getElementById("password").value;
      const correctPassword = "241401055"; 

      if (input === correctPassword) {
        window.location.href = "not_index.html";
      } else {
        alert("U R Wrong!");
      }
}