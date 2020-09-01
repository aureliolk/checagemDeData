const dev = 'Aurélio'
var $ = document.querySelector.bind(document)

var data = new Date()
var anoAtual = data.getFullYear()
var mes = data.getMonth()
var nameMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
var dias = data.getDay()
var nameDias = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
var horas = data.getHours()
var minutos = data.getMinutes()

if (horas >= 07 && horas <= 12) {
    var bd = 'Bom dia'
} else if (horas >= 12 && horas <= 18) {
    var bd = 'Boa tarde'
} else {
    var bd = 'Boa noite'
}

$('.topBar').innerHTML = `<p>Desenvolvedor: <span class='dev'>${dev}</span></p>
                        <p><span class='msgTop'>${bd}</span></p>
                        <p>hoje é <span class='msgSemanas'>${nameDias[dias]}</span>, <span class='msgDias'> ${dias} </span> de <span class='msgMes'> ${nameMes[mes]} </span> de <span class='msgAnos'> ${anoAtual} </span></p>`

$('.topTitle').innerHTML = `<label for='nameUser'> Insira seu nome </labe>
                          <p><input type='text' id='nameUser'>
                          <br>
                          <input type='button' value='Enviar' onclick='check()' id='buttonUser'></p>`



function check() {
    var nameUser = $('#nameUser').value

    if (nameUser.length == 0) {
        $('.box1').classList.add('msgCenter')
        $('.box1').innerText = ` Você deve iserir seu nome`
    } else {
        $('.box2').style.display = 'flex'
        var box1 = $('.box1')
        box1.parentNode.removeChild(box1)
        $('#buttonUser').style.display = 'none'
        $('#user').innerText = nameUser
    }
}

function askSim() {
    $('.askSexo.ocultar').style.display = 'block'
}
function aksNao(){
    alert('Aperte SIM para continuar')
}

function sexoMasc() {
    $('.askDataN.ocultar').style.display = 'block'
}
function check2() {
    var data = $('#dataN').value
    if (data > anoAtual || data.length == 0) {
        alert('Insira uma data correta')    
    }else{
        var result = anoAtual-data
        $('.formImg.ocultar').style.display='flex'
        $('#user2').innerText=nameUser.value
        $('#idade').innerText=Number(result)
        
        if ($('#sexoMasc').checked){
            $('#genero').innerText='masculino'
        }else if($('#sexoFem').checked){
            $('#genero').innerText='feminino'
        }

        if(result < 10 && $('#sexoMasc').checked ){
            $('#img').src='../img/foto-bebe-m.png'
        }else if(result < 10 && $('#sexoFem').checked ){ 
            $('#img').src='../img/foto-bebe-f.png'
        }else if(result >= 10 && result <= 18 && $('#sexoMasc').checked ){ 
            $('#img').src='../img/foto-jovem-m.png'
        }else if(result >= 10 && result <= 18 && $('#sexoFem').checked ){ 
            $('#img').src='../img/foto-jovem-f.png'
        }else if(result >= 18 && result <= 50 &&$('#sexoMasc').checked ){ 
            $('#img').src='../img/foto-adulto-m.png'
        }else if(result >= 18 && result <= 50 &&$('#sexoFem').checked ){ 
            $('#img').src='../img/foto-adulto-f.png'
        }else if(result >= 50 && $('#sexoMasc').checked ){ 
            $('#img').src='../img/foto-idoso-m.png'
        }else if(result >= 50 && $('#sexoFem').checked ){ 
            $('#img').src='../img/foto-idoso-f.png'
        }
        
    }
}






