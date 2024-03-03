/*criação de variávels para selecionar elementos*/

function horario(){

var mens = window.document.querySelector('msg')
var turn = window.document.querySelector('turnos')
var data = new Date()
var hora = 11

msg.innerHTML = `${hora} horas. Horário oficial de Brasília e dos óleos`

/*obs: o innerHtml pega o atribudo do query, seletor, ou seja, o 'msg' e não os horários*/ 

if (hora >= 0 && hora < 12){

turnos.src = 'img_horas/manha.png' 

} else if (hora >= 12 && hora < 18) {

turnos.src = 'img_horas/tarde.png'

} else {

turnos.src = 'img_horas/noite.png'

}

/*Certifique-se de adicionar o elemento do query selector, ao atributo que será mudado, nesse caso, id 
"turnos"*/

}