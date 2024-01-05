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