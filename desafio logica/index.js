// Classificador de nível de Herói

// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Exemplo de uso
const nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"), 10);

// Validação de entrada
while (isNaN(xpHeroi) || xpHeroi < 0) {
    xpHeroi = parseInt(prompt("XP inválido. Digite um número válido para o XP:"), 10);
}

classificarHeroi(nomeHeroi, xpHeroi);
