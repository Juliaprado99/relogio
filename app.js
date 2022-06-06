let clock = document.getElementById('clock')

function relogio(){
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  var seg = data.getSeconds()

  
  if(hora < 10){
    hora="0"+hora;
  }
  if(min < 10){
    min="0"+min;
  }
  if(seg < 10){
    seg="0"+seg;
  }

  clock.innerHTML = `${hora}:${min}:${seg}`
}
let time = setInterval(relogio,1000)

let btn = document.getElementById('btn')

function styleMode(){
  document.body.style.backgroundColor = '#343a36'
  document.getElementById('clock').style.color = 'white'
  document.getElementById('btn').style.color = '#343a36'
  document.getElementById('btn').style.border = '2px solid #343a36;'
    
}
btn.addEventListener('click', styleMode)