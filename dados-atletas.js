// Criação da classe Atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // Calcula a categoria do atleta
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    // Calcula o IMC do atleta
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Calcula a média válida (descarta maior e menor nota)
    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, 4);
        let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasValidas.length;
    }

    // Métodos para obter informações
    obtemNomeAtleta() { return this.nome; }
    obtemIdadeAtleta() { return this.idade; }
    obtemPesoAtleta() { return this.peso; }
    obtemAlturaAtleta() { return this.altura; }
    obtemNotasAtleta() { return this.notas; }
    obtemCategoria() { return this.calculaCategoria(); }
    obtemIMC() { return this.calculaIMC(); }
    obtemMediaValida() { return this.calculaMediaValida(); }
}

// Lista de atletas (mesmos nomes do projeto anterior)
let atletas = [
    new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
    new Atleta("Fernando Puntel", 25, 75, 1.80, [8, 10, 10, 7, 9.33]),
    new Atleta("Daiane Jelinsky", 20, 60, 1.65, [7, 10, 9.5, 9.5, 8]),
    new Atleta("Bruno Castro", 28, 85, 1.75, [10, 10, 10, 9, 9.5])
];

// Função que exibe os resultados de todos os atletas
function mostrarResultados(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        console.log(`Atleta: ${atleta.obtemNomeAtleta()}`);
        console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
        console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
        console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
        console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
        console.log(`Categoria: ${atleta.obtemCategoria()}`);
        console.log(`IMC: ${atleta.obtemIMC()}`);
        console.log(`Média válida: ${atleta.obtemMediaValida()}\n`);
    }
}

// Executa a função
mostrarResultados(atletas);
