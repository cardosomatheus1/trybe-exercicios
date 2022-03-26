// let buttonSubmit = document.getElementById("button")
// buttonSubmit.addEventListener("click",function(event){
//     event.preventDefault()
// })
// let concordo = document.getElementById("agree2") 

// let email = document.getElementById("email")
// let nome = document.getElementById("name")

// // function validacao(){
// if(email.value.length > 50 || nome.value.length > 60 || email.value.length < 10 || nome.value.length < 10 || concordo.checked == false ){
//     alert("Dados Inválidos")
// }
// else{
//     alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.")
// }
// }
// buttonSubmit.addEventListener("click",validacao)


const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
  
  var picker = new Pikaday({
    field: document.getElementById('date'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});