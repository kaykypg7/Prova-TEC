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




// 4
const fav = document.querySelectorAll('.esporte')[1]
fav.style.backgroundColor = 'yellow'



// 5

const inp1 = document.querySelectorAll('.inpSoma')[0]
const inp2 = document.querySelectorAll('.inpSoma')[1]
const btnSoma = document.querySelector('#btnCalc')
const pSoma = document.querySelector('#txtSoma')

btnSoma.addEventListener('click', ()=>{
    let valorInput1 = Number(inp1.value)
    let valorInput2= Number(inp2.value)
    var result = valorInput1 + valorInput2
    pSoma.innerHTML = `<b>o resultado é ${result}<b>`
    
})




// 6

// deve ter uma maneira mais fácil mas não veio na minha cabeça kkkkk
var nomes = []; 
var input = document.querySelector('.inp')
const btn = document.querySelector('.btn')
var caixa = document.getElementById('caixa')

    btn.addEventListener("click", (e)=>{
        var valor_input = input.value
        nomes.push(valor_input); 
        console.log("Nomes digitados:", nomes) // teste
        caixa.innerHTML = '<h1>Nomes digitados</h1>'
        for(i = 0; i< nomes.length; i++){
        caixa.innerHTML += `<p>${nomes[i]}</p>`
        }
    })


    // 7

const pQ7 = document.querySelectorAll('.pQuestao7')
for (let i = 0; i < pQ7.length; i++) {
    pQ7[i].style.backgroundColor = 'yellow'

}


