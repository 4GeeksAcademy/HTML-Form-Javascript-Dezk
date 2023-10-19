/* eslint-disable */
//import "bootstrap";
import "./style.css";

const form = document.querySelector("#myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const elementsToCheck = [
    "card",
    "cvc",
    "amount",
    "firstname",
    "lastname",
    "city",
    "state",
    "postalcode",
    "message"
  ];

  for (const elementName of elementsToCheck) {
    const element = e.target[elementName];
    const invalid = document.querySelector("#invalid");

    if (element.value === "") {
      invalid.style.display = "block";
      element.classList.add("is-invalid");
    } else {
      element.classList.remove("is-invalid");
    }
  }
});
