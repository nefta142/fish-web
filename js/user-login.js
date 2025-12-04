let users = JSON.parse(localStorage.getItem("users")) || [];

function showUsers() {
  let aux = "";
  for (let i = 0; i < users.length; i++) {
    aux += `
      <li>
        ${users[i].userName} - ${users[i].userSurname} - ${users[i].userEmail} - ${users[i].userPhone}
        <button class="edit-btn" data-index="${i}">
          <i class="bi bi-pencil-square"></i>
        </button>
      </li>`;
  }

  let usersList = document.getElementById("users-list");
  if (usersList) {
    usersList.innerHTML = aux;
  }

  attachEditEvents();
}


function listenToEvents() {
  let loginForm = document.getElementById("main-form-user");
  loginForm.addEventListener("submit", validateUserForm);
}

function validateUserForm(event) {
  let userName = event.target["user-name"].value.trim();
  let userSurname = event.target["user-surname"].value.trim();
  let userEmail = event.target["user-email"].value.trim();
  let userPhone = event.target["user-phone"].value.trim();

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

  if (error) {
    event.preventDefault();
    return;
  }

  // Si no hay errores → agregar usuario
  addUserToArray(event);
}

function addUserToArray(event) {
  event.preventDefault();

  let userName = event.target["user-name"].value;
  let userSurname = event.target["user-surname"].value;
  let userEmail = event.target["user-email"].value;
  let userPhone = event.target["user-phone"].value;

  let newUser = {
    userName,
    userSurname,
    userEmail,
    userPhone
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  showUsers();

  event.target.reset();
}

listenToEvents();
showUsers();

