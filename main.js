function iniciar() {
    var pokemon1 = {
        nome: "Charmander",
        hp: 100,
        ataques: [
            {
                nome: "Arranhao",
                dano: 5
            }
        ]
    }

    var pokemon2 = {
        nome: "Pikachu",
        hp: 100,
        ataques: [
            {
                nome: "Ataque Rapido",
                dano: 7
            },
            {
                nome: "Choque do Trovao",
                dano: 10
            },
            {
                nome: "Arranhao",
                dano: 5
            }
        ]
    }

    localStorage.setItem("pokemon1", JSON.stringify(pokemon1))
    localStorage.setItem("pokemon2", JSON.stringify(pokemon2))
    localStorage.setItem("jogoIniciado", JSON.stringify(true))

    atualizarHp()
    document.getElementsByTagName("audio")[0].currentTime = 0
    document.getElementsByTagName("audio")[0].play()
    console.clear()
    console.log("Jogo Iniciado!")
}

function atualizarHp() {
    var pokemon1 = JSON.parse(localStorage.getItem("pokemon1"))
    var pokemon2 = JSON.parse(localStorage.getItem("pokemon2"))

    document.getElementById("hpPokemon1").style.width = pokemon1.hp+"px"
    document.getElementById("hpPokemon2").style.width = pokemon2.hp+"px"
}

function atacar(idAtaque) {
    var pokemon1 = JSON.parse(localStorage.getItem("pokemon1"))
    var pokemon2 = JSON.parse(localStorage.getItem("pokemon2"))
    var jogoIniciado = JSON.parse(localStorage.getItem("jogoIniciado"))

    if(!jogoIniciado) {
        alert("Por favor, inicie o jogo!")
        return
    }

    pokemon1.hp -= pokemon2.ataques[idAtaque].dano
    console.log(pokemon2.nome+" usou "+pokemon2.ataques[idAtaque].nome+"!")
    if(pokemon1.hp <= 0) {
        alert(pokemon2.nome+" venceu a luta! Jogo finalizado.")
        console.log(pokemon2.nome+" venceu a luta! Jogo finalizado.")
        jogoIniciado = false
    }
    if(jogoIniciado) {
        pokemon2.hp -= pokemon1.ataques[0].dano
        console.log(pokemon1.nome+" usou "+pokemon1.ataques[0].nome+"!")
        if(pokemon1.hp <= 0) {
            alert(pokemon2.nome+" venceu a luta! Jogo finalizado.")
            console.log(pokemon2.nome+" venceu a luta! Jogo finalizado.")
            jogoIniciado = false
        }
    }

    if(!jogoIniciado) document.getElementsByTagName("audio")[0].pause()

    localStorage.setItem("pokemon1", JSON.stringify(pokemon1))
    localStorage.setItem("pokemon2", JSON.stringify(pokemon2))
    localStorage.setItem("jogoIniciado", JSON.stringify(jogoIniciado))

    atualizarHp()
}