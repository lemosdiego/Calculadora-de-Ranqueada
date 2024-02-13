//função

let nivel

function CalculadoraDePartidasRanqueadas(
    vitorias = prompt("Quantas seu número de vitórias: "), 
    derrotas = prompt("Digite seu número de derrotas: ")
    ){
    resultado = vitorias - derrotas
    return resultado
}

CalculadoraDePartidasRanqueadas()

switch (true) {
    case resultado < 10:
    case resultado > 11 && resultado <= 20:
        nivel = "Bronze";
        break;
    case resultado > 20 && resultado <= 50:
        nivel = "Prata";
        break;
    case resultado > 50 && resultado <= 80:
        nivel = "Ouro";
        break;
    case resultado > 80 && resultado <= 90:
        nivel = "Diamante";
        break;
    case resultado > 90 && resultado <= 100:
        nivel = "Lendário";
        break;
    default:
        nivel = "Imortal";
}

document.write(`O herói tem saldo de ${resultado}, está no nível ${nivel}`);