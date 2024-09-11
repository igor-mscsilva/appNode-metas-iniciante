const { select } = require('@inquirer/prompts')



const start = async () => {
    
    while(true){
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
                    name: "Sair",
                    value: "sair"
                }
                
            ]
        })

        switch(opcao) {
            case "cadastrar":
                break
                console.log("Vamos Cadastrar")
            case "listar":
                console.log("Vamos Listar") 
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
        
    }
}

start()