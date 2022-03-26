let buttonSubmit = document.getElementById("button")
buttonSubmit.addEventListener("click",function(event){
    event.preventDefault()
})
let concordo = document.getElementById("agree2") 

let email = document.getElementById("email")
let nome = document.getElementById("name")

function validacao(){
if(email.value.length > 50 || nome.value.length > 60 || email.value.length < 10 || nome.value.length < 10 || concordo.checked == false ){
    alert("Dados Inválidos")
}
else{
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.")
}
}
buttonSubmit.addEventListener("click",validacao)