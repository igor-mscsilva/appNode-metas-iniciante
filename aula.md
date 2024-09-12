## Linguagem de programação

todo - a fazer

Maneira de dar instruição ao computador.
Como um lego, ocê irá utilizar peças para criar algoritimos, ou seja, para resolver problemas.

    ## Algoritmo ##: Sequência de passos lógica e finita para resolução de um problema.


## Peças de uma linguagem

- [x] Comentários
- Declaração de variáveis (const , let)
- Operações (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (string, number, boolean)
- Estrutura de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estrutura de repetição (for/ while)

# Fases da resolução de um problema

Coletar os dados
Processar os dados ( manipular, alterar ...)
Apresentar os dados

## Escopo e Variáveis

- [x] Variáveis globais e locais
- [x] Constantes

## Tipos de dados:

Strings (textos): "" '' ``
- [x] String
- [x] Number: 2 1.4
- [x] Function
- [x] Boolean

## Opedadores

- [x] Operadores de atribuição de valor =
- [x] Operador de concatenação +
- [x] Operadores de comparação:  igual 1==2 |  Diferente 1!=2 | 1 < 2 
- [] Spread operator: ...

## Estruturas de dados:

## Array

- [x] Uma lista que contém qualque tipo de dado
- [x] Métodos de array: push, [find, forEach, filter] : HOF (Higher Order Functions)

### Objetos:

- [x] Atributos e métodos
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos

### Funtions

- [x] Criar
- [x] Executar
- [x] Arrow funtion



# Estrutura de repetição

- [x] while

const start = () => {
    let count = 1
    while(count <= 10){
        console.log(count)
        count++
    }
}

start()


# Condicionais

- [x] switch
- [x] if/else


## Módulos em Node.Js:

- [x] Importação de módulos (riquere, CommonJs)
- [x] Biblioteca 'inquirer' para criar prompts interativos

## Programação assíncrona e Promises:
- [x] Uso de funções assíncronas (async/await)

## Exemplos



let meta = {
    value: "Ler um livro por mes",
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

meta.log(metas[1].value)

// function // arrow function

//const criarMeta = () => {}

//function CriarMeta () {}