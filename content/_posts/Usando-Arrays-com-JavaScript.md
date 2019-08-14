---
title: Usando Arrays com JavaScript
tags: Javascript
---
Vamos supor que estou criando um programa e que preciso armazenar o nome de 10 pessoas. A primeira coisa que podemos pensar é em criar uma variável para cada nome, simples, não? **Não!!** Criar uma variável para cada nome é gastar recursos desnecessários, pois estamos alocando memória 10 vezes e ainda vamos ter um certo trabalho para manipular 10 variáves que no fim das contas servem para mesma coisa.

```
// Bad Code
var nome1 = 'Cristiano';
var nome2 = 'Maria';
var nome3 = 'João';
var nome4 = 'Cirilo';
var nome5 = 'Joaquina';
var nome6 = 'Manuel';
var nome7 = 'Valentina';
var nome8 = 'Enzo';
var nome9 = 'Samanta';
var nome10 = 'Suelen';

```

### Uma das melhores alternativas seria utilizar um array com todos esses nomes.
```
// Good code
var nomes = ['Cristiano','Maria','João','Cirilo','Joaquina','Manuel','Valentina','Enzo','Samanta','Suelen'];
```

Basicamente, os arrays são mapas que possuem posições numeradas e cada posição pode guardar um determinado valor de qualquer tipo. Vale lembrar que no Javascript os arrays não são arrays de verdade, eles não possuem um tamanho finito alocado na memória, como em algumas linguagens, os arrays dos javascript são objetos, com algumas regalias, pois oferecem formas de acessar suas propriedades por meio de índices e contam com algumas métodos para manipulação do mesmo.  A performance dos arrays em javascript é um pouco inferior a de outras linguagens, porém isso é compensado com sua facilidade de uso.

#### Criando um array

Podemos declarar um array das seguintes formas
```
// Na forma literal
var meuArray = []; // Com um array vazio
var meuArray = [1, 2, 'string']; // Com uma coleção de dados

// Com o construtor new Array

var meuArray = new Array(); // Array vazio
var meuArray = new Array(1, 2, 'string'); // Com uma coleção de dados
var meuArray = new Array(10); // Ou passando o tamanho do array
```
<div class="obs">OBS: Podemos passar qual o tamanho do array, mas esse não é o tamanho máximo, como ocorre em outras linguagens, pois os arrays do javascript não possuem um tamanho máximo, possuem apenas um tamanho inicial.
</div>

#### Alimentando um array

Antes de alimentar um array é preciso entender que a contagem de posições de um array começa do zero, ou seja, a primeira posição de um array é o 0, a segunda é o 1 e assim por diante.

Podemos alimentar um array na hora da sua criação, ou simplesmente indicando uma posição e qual valor queremos armazenar. 

```
var carros = []; ou var carros = new Array();
carros[1] = 'Pálio';
carros[7] = 'Ka';
```

Algo para se observar, é que não precisamos seguir a ordem das posições para colocar um valor, podemos simplesmente colocar um valor na posição 1 e depois um na posição 7 e teremos o seguinte resultado:
```
[ ,'Pálio', , , , , ,'Ka']
```
O que aconteceu é que as outras posições carregam o valor undefined, isso indica que elas estão "vazias", pois ainda não receberam nenhum valor. Veja uma representação visual do mesmo array.

```
[undefined, 'Pálio', undefined, undefined, undefined, undefined, undefined,'Ka']
```

Existem outras formas de alimentar e manipular um array, veremos algumas com a API do array.


#### API do array

Esses são apenas alguns dos métodos presentes no objeto array, coloquei os que são considerados mais usuais, porém você pode acessar a lista com todos os métodos no [site da Mozila](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).
* #### valueOf()

	Retorna o próprio array ou pode retornar o valor de alguma posição.

	```
	var meuArray = [1,2,3,4];
	meuArray.valueOf(); // [1,2,3,4]
	meuArray[1].valueOf(); // [2]
	```
* #### lenght
	Esse não é um metódo do array, é uma propriedade que contém o tamanho do array.

	```
	meuArray.length; // 4
	```

* #### push()
	Essa é um dos métodos mais utilizados, ele é usado para adicionar itens ao final do array.

	```
	meuArray = [1,2,3,4];
	meuArray.push('casa'); // [1,2,3,4, 'casa']
	```
	Podemos adicionar quantos valores quisermos em um único push.

* #### pop()
	Remove o ultimo item de um array.

	```
	meuArray = [1,2,3,4, 'casa'];
	meuArray.pop(); // [1,2,3,4]
	```

* #### unshift()
	Adiciona um item no inicio do array. Bem semelhante ao push.

	```
	meuArray = [1,2,3,4];
	meuArray.unshifit('Primeiro'); // ['Primeiro', 1, 2, 3, 4]
	```

* #### shift()
	Remove o primeiro item de um array. Semelhante ao pop.

	```
	meuArray = ['Primeiro', 1, 2, 3, 4];
	meuArray.shift(); // [1,2,3,4]
	```

* #### indexOf()
	Retorna a posição de um item, caso ele não exista o retorno é -1.
	```
	meuArray = [1,2,3,4];
	meuArray.push('casa'); // [1,2,3,4, 'casa']
	meuArray.indexOf('casa'); // 4
	meuArray.indexOf('batata'); // -1
	```
* #### splice()
	O splice tem 3 utilidades e cada utilidade vai depender dos argumentos que forem passados.
	```
	meuArray = [1,2,3,4, 'batata'];
	```
	**Remover:**
	```
	meuArray.splice(1,2); // [1,4, 'batata']
	```
	O primeiro argumento passado foi a posição onde vai começar a remoção e o segundo foi a quantidade de itens a ser removido. No nosso caso foram removidos 2 itens a partir da posição 1.
	Também podemos passar só o primeiro argumento, isso vai remover todos os itens da posição 1 em diante.

	```
	meuArray.splice(1); // [1]
	```

	**Substituir:**
	```
	meuArray  = [1,2,3,4];
	meuArray.splice(1,1, 'casa'); // [1, 'casa', 3, 4]
	```
	Aqui passamos 3 argumentos. O primeiro é a posição inicial, o segundo é a quantidade de itens que vão ser substituidos e o terceiro é novo valor que será incluido.

	**Adicionar em qualquer lugar**
	```
	meuArray = [1,2,3,4];
	meuArray.splice(1,0, 'manga'); // [1,'manga', 2, 3, 4]
	```

	Os argumentos passados são os mesmo, só que nesse casos não queremos remover nenhum item, por isso o segundo argumento foi 0. Logo, o item ‘manga’ foi para a posição 1 e todos os outros itens foram pra sua posição atual + 1.
	O número 2 estava na posição 1 e agora tá na 2, o 3 estava na 2 e agora está na 3 e o 4 estava na 3 e agora está na 4.


* #### forEach()
	Uma das muitas formas de percorrer um array, ele é uma ótima alternativa para substituir o clássico for.
	```
	meuArray = [1,2,3,4];

	//Percorrendo com o for:
	for(var i = 0; i < meuArray.lenght; i ++ {
		console.log(meuArray[i]);
	}

	//Utilizando o forEach:
	meuArray.forEach(function(item){
	console.log(item);
	});
	```
* #### filter()
	Utilizado para fazer uma busca de forma simples. A função retorna os itens que estiverem de acordo com a condição passada.

	```
	meuArray = ['Batman', 'Superman', 'Capitão'];
	// Buscar Batman no array
	meuArray.filter(function(item){
		return item === 'Batman';
	});

	// Retorno ['Batman']
	```
* #### every()
	Pode ser usado quando queremos verificar se todos os itens do array atendem a uma determinada condição.

	```
	meuArray = [
		{nome: 'Cristiano', idade: 22},
		{nome: 'Marcia', idade: 27},
		{nome: 'Alan', idade: 12}
	];
	//Verificar se todas as pessoas tem uma idade maior que 18
	meuArray.every(function(item){
		return item.idade > 18;
	});
	// Retorno falso
	```
* #### some()
	Ao contrário do every, o some retorna true se ao menos um item atender as condições passadas.
	```
	meuArray = [
		{nome: 'Cristiano', idade: 22},
		{nome: 'Marcia', idade: 27},
		{nome: 'Alan', idade: 12}
	];
	//Verificar se alguma pessoas tem uma idade maior que 18
	meuArray.some(function(item){
		return item.idade > 18;
	});

	//Retorno Verdadeiro
	```
* #### map()
	O map pode ser utilizado quando queremos criar um novo array a partir de outro, mas com algumas condições.
	```
	meuArray = [1,2,3,4,5,6,7,8,9,10,11,12];

	var novoArray = meuArray.map(function(item){
		return item * 2;
	});

	// novArray  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
	```
* #### reduce()
	O reduce tem basicamente a função de reduzir o valor a um único valor. Isso é feito com uma condição e inicialmente com 2 argumentos, acumulador e valor atual.
	```
	meuArray = [
		{nome: 'Cristiano', idade: 22},
		{nome: 'Marcia', idade: 27},
		{nome: 'Alan', idade: 12}
	];
	// Retonar a soma das idades de todas as pessoas
	meuArray.reduce(function(prev, cur){
		return prev + cur.idade;
	});

	Retorno  // "[object Object]2712"]
	```

	Tivemos esse retorno porque inicialmente o prev tem o valor undefine e é preciso definir em que valor iniciará a operação, no nosso caso será em 0.

	```
	meuArray.reduce(function(prev, cur){
		return prev + cur.idade;
	},0);
	//Retorno  61
	```

* #### concat()
	O concat é utilizado para concatenar dois arrays ou mais.
	```
	meuArray = [
		{nome: 'Cristiano', idade: 22},
		{nome: 'Marcia', idade: 27},
		{nome: 'Alan', idade: 12}
	];

	var outroArray = [
		{nome: 'Marta', idade: 45},
		{nome: 'Ananda', idade: 17}
	];

	novoArray = meuArray.concat(outroArray);
	

	//Resultado do novoArray 
	 [
		{nome: 'Cristiano', idade: 22},
		{nome: 'Marcia', idade: 27},
		{nome: 'Alan', idade: 12},
		{nome: 'Marta', idade: 45},
		{nome: 'Ananda', idade: 17}
	]; 

	```
Uma coisa interessante é que o array passado como argumento é sempre concatenado ao final.

* #### slice()
	O slice é bem diferente do splice. Com o slice podemos fazer recortes do nosso array ao passar as posições de início e fim.

	```
	meuArray = ['manga', 'leite', 'abacaxi', 'ovo'];
	meuArray.slice(0,2);
	//Retorno  ['manga', 'leite']
	```

	Se analisarmos bem, esse não era o resultado esperado, pois a posição 2 é o abacaxi. Isso aconteceu porque o ultimo item a ser retornado com o slice é a posição - 1, ou seja, 2-1.
	Se quisermos imprimir o abacaxi nosso slice deve ir de 0 a 3( 3 - 1).
	
	```
	meuArray.slice(0,3);
	// Retorno  ['manga', 'leite', 'abacaxi']

	```
* #### reverse()
	Essa é mais uma das propriedades com um nome intuitivo. Essa função faz exatamente o que o nome sugere, ela reverte o nosso array.

	```
	meuArray = [10,20,30,40,50];
	meuArray.reverse();
	// Retorno  [50, 40, 30, 20, 10]
	```
	Cuidado, pois essa é uma das operações que alteram o array.

* #### sort()
	Com ela nós conseguimos ordenar um array.
	```
	meuArray = ['comida', 'roupa lavada', 'casa'];
	meuArray.sort();
	// Resultado  ["casa", "comida", "roupa lavada"]
	```
	Porém esse método vai muito além disso, podemos ordenar itens números na ordem crescente ou decrescente.  A lógica da ordenação pode parecer confusa, mas é bem simples.

		1. Nós vamos ter dois argumentos A e B. 
		2. A será o primeiro item do array e B o segundo.
		3. A ordenação acontece com base na subtração entre A e B.
		4. Se o resultado for negativo, A aparece antes de B.
		5. Se o resultado for 0, nada é alterado.
		6. Se o resultado for positivo, B aparece antes de A.
	
	```
	meuArray = [20, 1, 44, 109, 6, 21, 5];

	meuArray.sort(function(a,b){
		return a - b;
	});

	// Resultado  [1, 5, 6, 20, 21, 44, 109]
	```
	Se quisermos que a ordenação seja em ordem decrescente só mudamos a subtração.

	```
	meuArray.sort(function(a,b){
		return b - a;
	});
	// Resultado  [109, 44, 21, 20, 6, 5, 1]
	```
	Esse método também altera o array.

* #### join()
	O join nos permite transformar um array em uma string com um separado qualquer.
	
	```
	meuArray = ['Bahia', 'Maceió', 'Pernambuco'];
	meuArray.join('-');
	// Resultado   'Bahia-Maceió-Pernambuco'
	```
	O join é como uma operação inversa do split. No split nós transformamos uma string em um array, já no join acontece o contrário.


### Isso é tudo, pessoal!!
Cheguei ao fim de mais um post!! Em breve farei mais alguns sobre a linguagem. Esse ficou um pouco extenso, mas o objetivo era fazer um resumão bem completo pra entender o básico do uso dos arrays.

Todo esse conteúdo foi feito com base nos seguintes links:
[Canal do Rodrigo Branas](https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=1)
[W3school](https://w3schools.com)
[Documentação da Mozila](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[Imasters](https://imasters.com.br/artigo/21197/javascript/entendendo-arrays-no-javascript/?trace=1519021197&source=single)


Obrigado por ler até aqui!! Se curtiu esse post compartilha com seus amigos e deixa um comentário caso tenha alguma sugestão do que posso melhorar.