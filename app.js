const btn = document.querySelector(".random-btn");
const img = document.querySelector("img");

//Icons Selection
const user = document.querySelector(".user");
const dateOfBirth = document.querySelector(".date");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const geoLocation = document.querySelector(".location");
const password = document.querySelector(".password");
const icons = document.querySelectorAll(".icon");



const userTitle = document.querySelector(".title");
const fullName = document.querySelector(".name");


btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      const randomUser = data.results[0];
      img.src = randomUser.picture.large;

      
      fullName.innerHTML = `${randomUser.name.first} ${randomUser.name.last}`;
      user.dataset.value = `${randomUser.name.first} ${randomUser.name.last}`;

      email.dataset.value = randomUser.email;
      dateOfBirth.dataset.value = randomUser.dob.date;

      geoLocation.dataset.value = `${randomUser.location.city} ${randomUser.location.country}`;
      phone.dataset.value = randomUser.phone;
      password.dataset.value = randomUser.login.password;
    });
});

document.body.addEventListener("click", (e) => {
  if (e.target.id === "icon") {
    const userValue = e.target.parentElement.dataset.value;
    const userTitle = e.target.parentElement.dataset.title;

    fullName.innerHTML = userValue;
    userTitle.innerHTML = userTitle;

    icons.forEach((el) => el.classList.remove("active"));
    e.target.parentElement.classList.add("active");
  }
});