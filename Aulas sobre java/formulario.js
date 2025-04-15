//executar mascaras

//define o objeto e chama a função
function mascara(o,f){
    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

//Mascara do Telefone
function telefone(variavel){
    variavel = variavel.replace(/\D/g,"") //Remove tudo que não é digito
    
    //A linha abaixo é responsavel de adicionar parenteses em volta dos dois primeiros digitos
    variavel= variavel.replace(/^(\d\d)(\d)/g,"($1) $2")

    //A linha abaixo é responsavel de adicionar o hifem entre o quarto e o quinto digito
    variavel=variavel.replace(/(\d{5})(\d)/,"$1-$2") //coloca a segunda barra
    return variavel
}

//Mascara do RG e CPF
function RGeCPF(variavel){
    variavel=variavel.replace(/\D/g, "")//Remove tudo que não é digito

    //coloca um ponto apois o TERCEIRO digito e o QUARTO digito
    variavel=variavel.replace (/(\d{3})(\d)/,"$1.$2")

    //coloca um ponto após o DEXTO digito e o SETIMO digito
    variavel = variavel.replace (/(\d{6})(\d)/,"$1.$2")

    //coloca um hifen apos o setimo digito e permine apenas digitos apos o hifen
    variavel = variavel.replace (/(\d{3})(\d{1,2})$/,"$1-$2")
    return variavel
}

//Mascara cep
function cep(variavel){
    variavel=variavel.replace (/\D/g,"") //remove tudo que nao é digito
    variavel=variavel.replace (/(\d{2})(\d)/,"$1.$2")
    variavel=variavel.replace(/(\d{3})(\d{1,3})$/,"$1-$2")
    return variavel
}
//mascara data
function data(variavel){
    variavel=variavel.replace(/\D/g,"")
    variavel=variavel.replace(/(\d{2})(\d)/,"$1/$2")
    variavel=variavel.replace(/(\d{2})(\d)/,"$1/$2")
    return variavel
}
//mascara cartao sus
function CartaoSus(variavel){
    variavel=variavel.replace(/\D/g,"")
    return variavel
}