# Projeto Dados Atletas

## Resumo do projeto

Este projeto é uma aplicação em **JavaScript** que recebe informações de atletas, calcula parâmetros importantes e exibe os resultados para o usuário.  

Entre as informações calculadas estão:  

- Categoria do atleta (Infantil, Juvenil, Intermediário ou Adulto)  
- IMC (Índice de Massa Corporal)  
- Média válida das notas (descartando a maior e a menor)  

O objetivo é praticar **orientação a objetos** com classes e métodos, além de manipulação de arrays e cálculos simples.

---

## Introdução

Os organizadores da competição de ginástica artística gostaram muito do projeto anterior (`notas-atletas`) e solicitaram uma versão mais completa.  

Dessa vez, a aplicação deve:

1. Receber **nome, idade, peso, altura e notas** de cada atleta.  
2. Calcular a **categoria** com base na idade:  

| Categoria       | Idade           |
|-----------------|----------------|
| Infantil        | 9 a 11 anos     |
| Juvenil         | 12 a 13 anos    |
| Intermediário   | 14 a 15 anos    |
| Adulto          | 16 a 30 anos    |
| Sem categoria   | demais idades   |

3. Calcular o **IMC** usando a fórmula:  

IMC = peso / (altura * altura)


4. Calcular a **média válida**, descartando a maior e a menor nota, usando a metodologia do projeto anterior.  

---

## Estrutura do projeto

O projeto possui:

- **`dados-atletas.js`**: arquivo principal com a classe `Atleta`, métodos para cálculo e exibição dos resultados.  

### Classe `Atleta`

A classe possui os seguintes **atributos**:

- `nome`  
- `idade`  
- `peso`  
- `altura`  
- `notas` (array com 5 valores)  

E os seguintes **métodos**:

- `calculaCategoria()` – retorna a categoria do atleta  
- `calculaIMC()` – retorna o IMC  
- `calculaMediaValida()` – retorna a média válida das notas  
- `obtemNomeAtleta()`, `obtemIdadeAtleta()`, `obtemPesoAtleta()`, `obtemAlturaAtleta()`, `obtemNotasAtleta()`, `obtemCategoria()`, `obtemIMC()`, `obtemMediaValida()` – métodos para acessar informações do atleta  

---

## Exemplo de uso

```javascript
// Criação do atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibição dos resultados
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
```
Como testar o projeto

Abra o VS Code e crie a pasta Dados Atletas.

Crie o arquivo dados-atletas.js e cole o código da classe e do teste.

Abra o terminal dentro da pasta do projeto.

Rode o projeto com o comando:

node dados-atletas.js


Veja os resultados no console.

