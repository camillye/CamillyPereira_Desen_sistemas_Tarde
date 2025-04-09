//apenas numeros (/\D/,g"");
//apenas letras (/[^a-zA-Z- áÁéÉíÍóÓúÚçÇ]/g,'');//
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

function 