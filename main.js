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

let barVals = [{lbl: "Html", val: 11},{lbl: "Python", val: 12},{lbl: "Java", val: 6},{lbl: "CSS", val: 8},{lbl: "Javascript", val: 11}]; //json values
const canv = document.querySelector("#canv"),
  ctx = canv.getContext("2d"),
  addVal = () => {
    const theLbl = document.querySelector("#lbl").value,
      theVal = document.querySelector("#val").value;
    if(!theLbl || theVal === "") return false;
    if (!!barVals.find(n => n.lbl == theLbl)) {
      return alert("This item already in chart!");
    }
    barVals.push({
      lbl: theLbl,
      val: Number(theVal)
    });
    renderChart(); 
  };

const renderChart = () => {
  console.log(barVals);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0,0,canv.width,canv.height)
  if(!barVals.length) return false;
  const rawVals = barVals.map(q => q.val),
    min = Math.min(...rawVals)-1,
    max = Math.max(...rawVals)+1,
    barWid = canv.width/barVals.length;
   console.log(barVals,min,max,barWid,rawVals);
  let currX = 0,
      lgndStuff = '<h3>Legend:</h3><hr><ul style="list-style:none">';
  for(let i=0;i<barVals.length;i++){
    let currHeight = Number(canv.height)*(barVals[i].val-min)/(max-min),
        currHue = Math.floor(i*360/barVals.length);
    ctx.fillStyle = `hsl(${currHue},100%,40%)`;
    ctx.fillRect(currX,canv.height-currHeight,barWid,currHeight);
    ctx.fillRect(0,canv.height,5,5)
    currX= Math.floor(currX+barWid);
    lgndStuff+=`<li><div class='lbl' style='background:${ctx.fillStyle}'></div>&nbsp;${barVals[i].lbl} &nbsp;</li>`
  }
  lgndStuff+='</ul>'
  document.querySelector('#lgnd').innerHTML = lgndStuff
};
const removeVal=(l) =>{
  barVals = barVals.filter(q=>q.lbl!=l);
  renderChart();
}
renderChart();