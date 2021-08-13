const inputCriptomoeda = document.querySelector('#criptomoeda');
const valor = document.querySelector('.valor');

inputCriptomoeda.addEventListener('change', function () {
    if (!inputCriptomoeda.value) {
        return;
    }

    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${inputCriptomoeda.value}/ticker/`);

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valor.textContent = Number(body.ticker.high).toFixed(2);
        });
    });

});