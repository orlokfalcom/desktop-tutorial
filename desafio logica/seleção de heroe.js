class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(outroHeroi = null) {
        let ataque;
        
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        
        let mensagem = `O ${this.tipo} atacou usando ${ataque}\n.`;
        let mensagem2 = `O monstro sofreu dano letal \n`;
        console.log(mensagem);
        alert(mensagem2); // Remova esta linha se não quiser que apareça no alerta.
    }
}

// Criando heróis
const herois = [
    new Heroi("Arthas", 30, "guerreiro"),
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Shen", 28, "ninja"),
    new Heroi("Shaolin", 35, "monge")
];

function iniciarBatalha() {
    let continuar = true;
    
    while (continuar) {
        let escolhaHeroi = prompt("Escolha o herói que irá atacar (1-4):\n1. Arthas (Guerreiro) \n2. Merlin (Mago) \n3. Shen (Ninja) \n4. Shaolin (Monge) \n digite aqui sua opção :\n ");
        let atacante = herois[parseInt(escolhaHeroi) - 1];
        
        if (!atacante) {
            alert("Opção inválida, tente novamente.");
            continue;
        }

        atacante.atacar();
        
        let opcao = prompt("Deseja realizar outro ataque? Digite 's' para sim ou 'sair' para encerrar.").toLowerCase();
        
        if (opcao === 'sair') {
            continuar = false;
        }
    }
}

iniciarBatalha();
