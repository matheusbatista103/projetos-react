function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        console.log('Cadastrou um usuario')
    }

    return(
        <div>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario