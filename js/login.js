function logar (){
   var email = document.getElementById("email")
   var senha = document.getElementById("senha")

   console.log(email.value+senha.value)

   if(email.value == "usuario@gmail.com" && senha.value == "senha"){
        localStorage.setItem("acesso", true)
        window.location.href = "index.html"
        alert("Usuario autenticado!")
   }
   else{
       alert("Usuario ou senha invalidos!")
   }
}