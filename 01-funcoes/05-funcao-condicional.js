function verificaNota(media){
    if (media >= 7){
        return "aprovado"
    }
    return "reprovado"
}

console.log(verificaNota(8));