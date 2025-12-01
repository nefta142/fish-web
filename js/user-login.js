let users = [];

function showUsers() {
  let aux = "";
  for (let i = 0; i < users.length; i++) {
    aux += `<li>${users[i].userName} - ${users[i].userSurname} - ${users[i].userEmail} - ${users[i].userPhone}</li>`;
  }
  let usersList = document.getElementById("users-list");
  if (usersList) {
    usersList.innerHTML = aux;
  }
}

function listenToEvents() {
  let loginForm = document.getElementById("main-form-user");
  loginForm.addEventListener("submit", addUserToArray);
}

function addUserToArray(event) {
  event.preventDefault();

  let userName = event.target["user-name"].value;
  let userSurname = event.target["user-surname"].value;
  let userEmail = event.target["user-email"].value;
  let userPhone = event.target["user-phone"].value;

  let newUser = {
    userName: userName,
    userSurname: userSurname,
    userEmail: userEmail,
    userPhone: userPhone
  };

  users.push(newUser);
  showUsers();

  event.target.reset();
}

listenToEvents();
showUsers();
