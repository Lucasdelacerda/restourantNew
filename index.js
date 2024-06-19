// Selecionando todos os elementos que representam pizzas
const pizzas = document.querySelectorAll(".pizzas");
const carrinho = document.getElementById('cart');
const cartList = document.getElementById('cart-conteiner');
// Definindo as informações das pizzas
let dadosPizzas = [
    { id: 1, nome: 'Calabresa', preco: 29.99 },
    { id: 2, nome: 'Quatro Queijos', preco: 59.99 },
    { id: 3, nome: 'Mussarela', preco: 99.99 },
    { id: 4, nome: 'Portuguesa', preco: 149.99 },
    { id: 5, nome: 'Portuguesa', preco: 149.99 },
    { id: 6, nome: 'Portuguesa', preco: 149.99 }
];

// Array para armazenar o pedido de pizzas selecionadas
let pedido = [];

// Adicionando um evento de clique para cada pizza
pizzas.forEach(pizza => {
    pizza.addEventListener('click', () => {


        // Obtendo o id da pizza clicada
        let idPizza = parseInt(pizza.dataset.id);
        console.log(idPizza);

        // Encontrando os dados da pizza no array dadosPizzas
        let pizzaSelecionada = dadosPizzas.find(p => p.id === idPizza);

        // Adicionando a pizza selecionada ao pedido
        pedido.push(pizzaSelecionada);

        console.log(`Pizza ${pizzaSelecionada.nome} adicionada ao pedido.`);
        console.log('Pedido atual:', pedido);
        atualizarCarrinho();
    });
});
const bebidas = document.querySelectorAll(".bebidas");

// Definindo as informações das pizzas
let dadosBebidas = [
    { id: 1, nome: 'coca', preco: 29.99 },
    { id: 2, nome: 'fanta', preco: 59.99 },
    { id: 3, nome: 'suco', preco: 99.99 },
];


// Adicionando um evento de clique para cada pizza
bebidas.forEach(bebida => {
    bebida.addEventListener('click', () => {


        // Obtendo o id da pizza clicada
        let idBebida = parseInt(bebida.dataset.id);
        console.log(idBebida);

        // Encontrando os dados da pizza no array dadosPizzas
        let bebidaSelecionada = dadosBebidas.find(p => p.id === idBebida);

        // Adicionando a pizza selecionada ao pedido
        pedido.push(bebidaSelecionada);

        console.log(`bebida ${bebidaSelecionada.nome} adicionada ao pedido.`);
        console.log('Pedido atual:', pedido);
        atualizarCarrinho();
    });
});

const sobremesas = document.querySelectorAll(".sobremesas");

// Definindo as informações das pizzas
let dadosSobremesa = [
    { id: 1, nome: 'bolo', preco: 29.99 },
    { id: 2, nome: 'Mouse', preco: 59.99 },
    { id: 3, nome: 'Picolé', preco: 99.99 },

];

function atualizarCarrinho() {
    // Limpar o conteúdo atual do carrinho
    cartList.innerHTML = '';

    // Adicionar cada item do pedido como um <li> na lista do carrinho
    pedido.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartList.appendChild(li);
        li.classList.add('itens');
    })};

// Adicionando um evento de clique para cada pizza
sobremesas.forEach(sobremesa => {
    sobremesa.addEventListener('click', () => {


        // Obtendo o id da pizza clicada
        let idPSobremesa = parseInt(sobremesa.dataset.id);
        console.log(idPSobremesa);

        // Encontrando os dados da pizza no array dadosPizzas
        let sobremesaSelecionada = dadosSobremesa.find(p => p.id === idPSobremesa);

        // Adicionando a pizza selecionada ao pedido
        pedido.push(sobremesaSelecionada);

        console.log(`Pizza ${sobremesaSelecionada.nome} adicionada ao pedido.`);
        console.log('Pedido atual:', pedido);
        atualizarCarrinho();
    });
});

let carrinhoSelecionado = 0
carrinho.addEventListener('click', () => {
    if (carrinhoSelecionado == 0) {

        document.getElementById("cart-conteiner").style.display = 'flex';
        carrinhoSelecionado = 1
    }
    else {
        document.getElementById("cart-conteiner").style.display = 'none'
        carrinhoSelecionado = 0
    }
}
)

