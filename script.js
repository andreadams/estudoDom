
 
//async function PegaApi(user){
  try{
    const api = await fetch(`https://api.github.com/users/${user}/repos`)
    const dados = await api.json()

    return dados

  }catch(error){console.error(error)}

}


async function ExibirApi(user){
  const container = document.querySelector('#container');
  const img = document.querySelector('#img1');

  try{
    const usuario = await PegaApi (user)
    usuario.forEach((us)=>{
      const text = document.createTextNode(`Exibir Nome: ${us.name}`)
      container.append(text)


      img.src = us.owner.avatar_url;

    })
      
   

  }catch(error){console.error(error)}
}

const name = 'andreadams';
ExibirApi(name)


localStorage.setItem('nome', 'André Silverio Silva');

const nome = localStorage.getItem('nome')
//console.log(nome);

//localStorage.removeItem('nome')



// ARRAY ===== position

const array = [1,2,3];
//console.log(array[2])

//repetidores

const array1 = [1,1,3];
const set = new Set(array1)
const from = Array.from(set)
//console.log(from)

//sort
const array2 = [1,9,3];
const sort = array2.sort((a,b)=> b-a);
//console.log(sort)

//concat
const array3 = [1,2,3]; const array4 = [1,2,3];
const concat = array3.concat(array4);
//console.log(concat)

//filter
const array5 = [1,2,3]; //const array6 = [1,2,5];
const filter = array5.filter((ev)=> ev % 2 === 0)
//console.log(filter)


//string

const string = 'amor';

const replai = string.replace(/a/g, '#')
//console.log(replai)

//For

for(let i = 1; i < 11; i++){
  //console.log(`2x${i} = ${i*2}`)
}

//if else

const thor = 2;
if(thor <=1){
//console.log("Filhote")
}//else{//console.log("Adulto")}

//switch
const thor1 = 3;
switch(thor1){
  case 1:
    //console.log("Filhote");
    break;
  case 2:
   // console.log("Adulto");
    break;

    default:
     // console.log("Erro");
}

// DOM =====

//document

//const container = document.querySelectorAll('body');
//console.log(container)

//atribute

//const container = document.querySelector('#vad');
//container.getAttribute('vada')
//console.log(container)

//creat


const div = document.createElement('div');
const p = document.createElement('p');
const text = document.createTextNode('Esse foi um texto criado');

//container.append(div,p, text )


//texnode

//classlist
const container = document.querySelector('.vad1');
//container.style.color = '#fff'


//Eventos/ click/ focus/ blue/ submit / load / input


// REVISÃO GERAL DA ULTIMA SEMANA DE NOVEMBRO 


/* if else */

/* Switch */

/* For While */

/* Função */

/* Operadores Matematicos e Logicas */

/* Arrays - Posição */

/* Arrays - Ordenação */

/* Arrays - Retira repetidos */

/* Arrays - Retira Comparação */

/* Arrays - Concatenar */

/* String - Altera valor */

/* String - Concatenar */

/* Arvore Binaria */

/* Tabela Hash */

/* Lista Vinculada */

/* Leetcode - Build Array from Permutation */

/* Leetcode - Concatenation of Array */

/* Leetcode - Number of Good Pairs */

/* Dom - queryselector(' ')  */

/* Dom - Atribute */

/* Dom - innerText*/

/* Dom - creat Element*/

/* Dom Evento - click, blue, foces, load, submit, input */

/* Escopo */

/* localStorage */

/* Promises */

/* HTML - Semanantica */

/* HTML - Data attibutes */

/* CSS - Keyframes */

/* CSS - Media Queries */

/* CSS - Flexbox */

/* CSS - Grid Layout */

/* Git - GitHob */