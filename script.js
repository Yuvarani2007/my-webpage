function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // CHANGE THESE VALUES
  const correctUser = "My Moonlight";
  const correctPass = "2006";

  if (user === correctUser && pass === correctPass) {
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText =
      "Wrong username or password ❌";
  }
}