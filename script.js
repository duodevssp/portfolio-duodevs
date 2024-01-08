document.querySelector('.cabecalho__opcoes__modo__ponto').addEventListener('click', (e) => {
    e.target.classList.toggle('cabecalho__opcoes__modo__ponto-move');
    document.body.classList.toggle('dark');
});

var menuItems = document.querySelectorAll('.menu__lista__nav');

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {

        menuItems.forEach(function (item) {
            item.classList.remove('active');
        });

        menuItem.classList.add('active');
    });
});


/*Envio Whatsapp*/
var submit = document.querySelector('#submit');
var cel = 5511975602377;

submit.addEventListener('click', function () {
    event.preventDefault();

    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var telefone = document.querySelector('#telefone').value;
    var detalhes = document.querySelector('#detalhes').value;

    var url = "https://wa.me/"+cel +"?text="+ "Nome: " + nome + "%0a"
    + "Email: " + email + "%0a" +
    "Telefone: " + telefone + "%0a"
    + "Detalhes: " + detalhes;

    window.open(url, '_blank').focus();
})