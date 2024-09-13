const { select, input, checkbox } = require('@inquirer/prompts')
const fs = require("fs"). promises

let mensagem = "Bem vindo  ao app de Metas";

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message : "Digite a meta: "})

    if(meta.length == 0){
        mensagem = "A meta não pode ser vazia."
        return
    }

    metas.push(
        { value: meta, checked: false}
    )

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async() =>{
    if(metas.length == 0){
        mensagem = "Não existe metas!"
        return
    }
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o Enter para finalizar essa etapa. ",
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0){
        mensagem = "Nenhuma meta seleciona!"
        return
    }

    //Descarmar as metas
    metas.forEach((m) => {
        m.checked = false
    })

    //Se a meta for igual a resposta ele marca a meta
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })

    mensagem = 'Meta(s) marcadas como concluída(s)!'
}

const metasRealizadas = async () => {
    if(metas.length == 0){
        mensagem = "Não existe metas!"
        return
    }
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length = 0){
        mensagem = 'Não existe metas realizadas!'
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
    
}
//Agua [] - caminhar [] - cantar[x]

const metasAbertas = async () => {
    if(metas.length == 0){
        mensagem = "Não existe metas!"
        return
    }
    const abertas = meta.filter((meta) =>{
        return meta.checked != true
    })

    if(abertas.length == 0){
        mensagem = "Não existe metas abertas! ;)"
        return
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })

}

const deletarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Não existe metas!"
        return
    }
    const metasDesmarcadas = meta.map((meta) =>{
        return { value: meta.value, checked: false }
    })

    const itemsADeletar = await checkbox ({
        message: "Selecione item para deletar ",
        choices: [...metasDesmarcadas],
        instructions: false,
    })
    console.log(respostas)

    if(itemsADeletar.length == 0) {
        mensagem = "Nenhum item para deletar!"
        return
    }

    itemsADeletar.forEach((item) => {
        metas = metas.filter((meta) =>{
            return meta.value != item
        })
    })
    mensagem = "Meta(s) deletada(s) com sucesso!"

}

const mostrarMensagem = () => {
    console.clear();
    if(mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}
   


const start = async () => {
    
    while(true){
        mostrarMensagem()
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },

                {
                    name: "Deletar metas",
                    value: "deletar"
                },

                {
                    name: "Sair",
                    value: "sair"
                }
                
            ]
        })

        switch(opcao) {
            case "cadastrar":
               await cadastrarMeta()
               
            break
                
            case "listar":
                await listarMetas()
            break
            case "realizadas":
                await metasRealizadas()
            break

            case "abertas":
                await metasAbertas()
            break

            case "deletar":
                await deletarMetas()
            break

            case "sair":
                console.log("Até a próxima!")
            return
        }
        
    }
}

start()