const user = 'Aurélio'
document.getElementsByTagName('title')[0].innerText=`Bem vindo | ${user}`
// var horas = prompt('Insira um valor de 07 a 24')
var dataAtual = new Date();
var anos = dataAtual.getFullYear();
var dias = new Array(
    'Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado')

horas = dataAtual.getHours();


var minutos = dataAtual.getMinutes();

var body = document.getElementsByTagName('body')[0]
var msgTitle = document.querySelector('.msgTitle')
var msg1 = document.querySelector('.msg1')
var img = document.querySelector('.img')
var msgFooter = document.querySelector('.msgFooter')

var eleImg = document.createElement('img')
img.appendChild(eleImg)


if (horas >= 07 && horas <= 12){
    body.style.backgroundColor='#FC0000'
    msgTitle.innerText=`Bom dia ${user}`
    msg1.innerText=`agora é ${horas}:${minutos} de ${dias[dataAtual.getDay()]} de ${anos}`
    eleImg.src='../Cuso em Video JS/img/bomdia.jpg'
    msgFooter.innerText='Acos Developer'
} else if (horas >= 12 && horas <= 18) {
    body.style.backgroundColor='#FCA647'
    msgTitle.innerText=`Boa tarde ${user}`
    msg1.innerText=`agora é ${horas}:${minutos} de ${dias[dataAtual.getDay()]} de ${anos}`
    eleImg.src='../Cuso em Video JS/img/boatarde.jpg'
    msgFooter.innerText='Acos Developer'
} else{
    body.style.backgroundColor='#000'
    msgTitle.innerText=`Boa noite ${user}`
    msg1.innerText=`agora é ${horas}:${minutos} de ${dias[dataAtual.getDay()]} de ${anos}`
    eleImg.src='../Cuso em Video JS/img/boanoite.jpg'
    msgFooter.innerText='Acos Developer'
}

function changeP(){
    alert('funciona')
    return
}
