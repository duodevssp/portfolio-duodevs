document.querySelector('.cabecalho__opcoes__modo__ponto').addEventListener('click', (e) => {
    e.target.classList.toggle('cabecalho__opcoes__modo__ponto-move');
    document.body.classList.toggle('dark');
});
