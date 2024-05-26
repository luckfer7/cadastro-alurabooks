// // task queue
// console.log('oi');

// function sayHello() {
//     console.log('hello');
// }

// setTimeout(sayHello, 5000); 

// console.log('banana');

// // call stack

// // console.log('oi');

// // function sayHello() {
// //     console.log('hello');
// // }

// // sayHello();

// // console.log('banana');

// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error ('Esse cep está incorreto!')
//         } else 
//             console.log(r)
//     })

//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído'));

// console.log(consultaCep); 

//o console ja imprimiu da forma correta sem precisar do segundo then
// no entanto, o segundo then me trouxe uma resposta ja mostrada, sem precisar clicar na seta.
    

//mesmo não usando o catch, o erro tbm é mostrado no console, dentro da seta pending, com a mensagem rejected e typeerror. com o catch ele mostra a mesma mensagem separadamente, embaixo.

        //PORÉM, HÁ OUTRA FORMA DE FAZER O CÓDIGO ANTERIOR, COM MENOS LINHAS.

async function buscarEndereco (cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""; //se nãp há erro, não há nada lá.
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida =  await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error ('CEP não existente');
        } //esse erro é pra caso o cep seja passado errado, mas respeitando os caracteres.

        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro');
        var numero = document.getElementById('numero');
        var complemento = document.getElementById('complemento');

        cidade.value = consultaCepConvertida.localidade;
        bairro.value = consultaCepConvertida.bairro;
        numero.value = consultaCepConvertida.numero;
        complemento.value = consultaCepConvertida.complemento;
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Insira um CEP válido!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarEndereco (cep.value));

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscarEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));


    

