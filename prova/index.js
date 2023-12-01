// 1
const nome = document.querySelector("#tName")

nome.style.backgroundColor = 'blue'
nome.style.textAlign = 'center'

//2
const inputTxt = document.querySelector(".inpText")
const btnSub = document.querySelectorAll(".btnEnviar")[0]
btnSub.addEventListener('click', ()=>{
        console.log(inputTxt.value)
})
// 3
const inputVelocidade = document.querySelector(".inpVelo")
const btnEnviar = document.querySelectorAll(".btnEnviar")[1]
const p = document.querySelector('#result')
btnEnviar.addEventListener('click', ()=>{
        if (inputVelocidade.value > 80){
                p.style.backgroundColor = 'red'
                p.innerHTML = `Você está a ${inputVelocidade.value}km/h , Limite ultrapassado, velocidade permitida na via é de 70km/h`
        }
        else{
                p.style.backgroundColor = 'green'
                p.innerHTML = `Você está a ${inputVelocidade.value}km/h, velocidade permitida na via é de 70km/h`
        }
})








