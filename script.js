function identificar(){
    var sexo = getSex()
    var idade = getAge()

    if (! validateAge(idade)){
        window.alert("Favor, insira uma data de nascimento válida.")
    }    
    
    else if (sexo == "indefinido"){
        window.alert("Por favor, selecione seu sexo.")
    }
    else {
        var resultado = getElement("section#resultado > h2")
        var pessoa 
        if (sexo == "M"){
            if (idade < 18){
                pessoa = "um menino"
                setImage("imagens/menino.png", "menino")
            }
            else if (idade < 60){
                pessoa = "um homem"
                setImage("imagens/homem.png", "homem")
            }
            else {
                pessoa = "um idoso"
                setImage("imagens/idoso.png", "idoso")
            }
        }
        else {
            if (idade < 18){
                pessoa = "uma menina"
                setImage("imagens/menina.png", "menina")
            }
            else if (idade < 60){
                pessoa = "um mulher"
                setImage("imagens/mulher.png", "mulher")
            }
            else {
                pessoa = "um idosa"
                setImage("imagens/idosa.png", "idosa")
            }
            
        }
        resultado.innerText = `Detectamos ${pessoa} de ${idade} anos`
    }     
}

function getSex(){
    var radioBoxSexo = document.getElementsByName("sexo")
    var sexo = "indefinido"
    radioBoxSexo.forEach(element => {
        if (element.checked){
            sexo = element.value
        }
    }
    );
    return sexo
}


function setImage(file, alt){
    var image = getElement("img#image")
    image.src = file
    image.alt = alt
}


function getAge(){
    var inputNum = getElement("input#ano-nascimento")
    var anoNascimento = inputNum.value
    var anoAtual = new Date().getFullYear()

    return anoAtual - anoNascimento
}

function validateAge(age){
    if (age >= 0 && age < 120){
        return true
    }
    return false
}


function getElement(element){
    return document.querySelector(element)
}