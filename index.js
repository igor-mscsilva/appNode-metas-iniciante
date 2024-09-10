

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