const mensagensDivertidas =
    [
"Qual é o desastre natural que os cães mais odeiam? A erupção vulcânica."
"Qual é a peça de carro que é feita só no Egito? O faraó."
"O que o cadarço falou para o tênis? Vamos dar um nó, que a vida é curta."
"O engenheiro olhou para o espelho. E viu um reflexo de sua profissão."
"Na briga entre o esparadrapo e a fita isolante, quem ganhou? O esparadrapo, porque ele estava mais colado na realidade."
    ]

    let botaoDivertido = document.getElementById("botaoDivertido");
    let mensagemDivertida = document.getElementById("mensagemDivertida");

    botaoDivertido.addEventListener('click', function() {
        
        const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]
    })