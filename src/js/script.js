const button = document.getElementById("button");

button.addEventListener("click", () => {
    const chute = parseInt(document.getElementById("valor").value);
    //console.log(chute);

    const numeroSecreto = parseInt((Math.random() * 10) +1); 

    const result = document.getElementById("result");


    if (chute == numeroSecreto) {
        console.log("acertou");
        result.innerHTML = `Você acertou! O número secreto era ${numeroSecreto}`;
    } else if (chute > 10 || chute < 0) {
        result.innerHTML = `Seu chute tem que ser um número entre 0 e 10`
    } else {
        console.log("errou");
        result.innerHTML = `Errou! O número secreto era ${numeroSecreto}`;
    };
});


