let users = JSON.parse(localStorage.getItem("users")) || [];

let params = new URLSearchParams(window.location.search);
let index = params.get("index");

let form = document.getElementById("edit-form-user");

if (index !== null && users[index]) {
  form["user-name"].value = users[index].userName;
  form["user-surname"].value = users[index].userSurname;
  form["user-email"].value = users[index].userEmail;
  form["user-phone"].value = users[index].userPhone;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userName = form["user-name"].value.trim();
  let userSurname = form["user-surname"].value.trim();
  let userEmail = form["user-email"].value.trim();
  let userPhone = form["user-phone"].value.trim();

  let error = false;

  if (userName === "") {
    document.getElementById("user-name-error").style.visibility = "visible";
    error = true;
  } else {
    document.getElementById("user-name-error").style.visibility = "hidden";
  }

  if (userSurname === "") {
    document.getElementById("user-surname-error").style.visibility = "visible";
    error = true;
  } else {
    document.getElementById("user-surname-error").style.visibility = "hidden";
  }

  if (userEmail === "") {
    document.getElementById("user-email-error").style.visibility = "visible";
    error = true;
  } else {
    document.getElementById("user-email-error").style.visibility = "hidden";
  }

  if (userPhone === "") {
    document.getElementById("user-phone-error").style.visibility = "visible";
    error = true;
  } else {
    document.getElementById("user-phone-error").style.visibility = "hidden";
  }

  if (error) return;

  users[index] = {
    userName,
    userSurname,
    userEmail,
    userPhone
  };

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "user-login.html";
});
