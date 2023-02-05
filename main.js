const img = document.querySelectorAll(".slide");
const nxtimg = document.querySelector(".btn-next");
let presentimg = 0;
const pastimg = document.querySelector(".btn-prev");
let maximg = img.length - 1;

img.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

nxtimg.addEventListener("click", function () {
  if (presentimg === maximg) {
    presentimg = 0;
  } else {
    presentimg++;
  }
  img.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - presentimg)}%)`;
  });
});


pastimg.addEventListener("click", function () {
  if (presentimg === 0) {
    presentimg = maximg;
  } else {
    presentimg--;
  }

  img.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - presentimg)}%)`;
  });
});

const contact = document.querySelector(".contact-boton");
const nombre = document.getElementById("nombre");
const email = document.getElementById ("emailg")
const message = document.getElementById("message")


function validateName(name){
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var name = document.getElementById('nombre').value;
  if(!regName.test(name)){
      alert('Invalid name given.');
      return false
  }else{
      alert('Valid name given.');
      return true
  }
}

function validateEmail(email) {
  const validEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  if (email.value.match(validEmail)) {
    return true;
  } else {
    alert("No valid email")
    return false;
  };
};

function validateMessage(input){
  if(input.value === ""){
    alert("No escribiste ningun mensaje")
    return false
  }
  else{
    return true
  }
}

contact.addEventListener("click", function(){
  if(validateName(nombre.value) === true && validateEmail(email) === true && validateMessage(message) === true){
    alert("Información valida")
  }else{
    alert("Información no valida")
  }
})

const mat = document.querySelector(".mat-bars");
let stringResult = "";

const skills = {
    "HTML": 40,
    "CSS":20,
    "JS": 60,
    "Python": 65,
    "Java": 30
};

function writeHTML() {
  for (const key in skills) {
      const stringStructure = ` 
      <style>
      #${key} {
      width: ${skills[key]}%;
      }
      </style>
      <div class='bar-and-name'>
          <div class='bar-and-name'>
              <h1 class='bar-name'>${key}</h1>
                  <div class='graph-space'>
                  <div id='${key}' class='graph'>${skills[key]}%</div>
          </div>
      </div>`;
      stringResult += stringStructure;
  };
  mat.innerHTML = stringResult;
};

writeHTML();
