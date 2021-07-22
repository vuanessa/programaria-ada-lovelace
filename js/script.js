document.getElementById("botao-enviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
   document.getElementById("email").value != "" &&
   document.getElementById("telefone").value != ""){
  alert("Prontinho!Voce recebera os dados por email!")
  }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone!")
  }
}


