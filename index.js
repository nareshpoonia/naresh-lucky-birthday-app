var dateOfBirth = document.querySelector("#dob");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var resultParagraph = document.querySelector("#result");

checkNumber.addEventListener("click", function () {
  var dateOfBirthValue = dateOfBirth.value;
  var usabledateOfBirth = dateOfBirthValue.replaceAll("-", "");
  let dateSum = 0;
  for (let i = 0; i < usabledateOfBirth.length; i++) {
    dateSum = dateSum + Number(usabledateOfBirth.charAt(i));
  }
  if (dateSum % Number(luckyNumber.value) === 0) {
    resultParagraph.innerText = "Congratulation, Your birthdya is lucky !";
  } else {
    resultParagraph.innerText =
      "Sorry, Luck is not on your side, Work Hard and change that !";
  }
});
