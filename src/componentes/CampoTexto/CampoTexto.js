import './CampoTexto.css'

const CampoTexto = (props) => {

    // faz uma função com nome aoDigitado que tem o trabalho de buscar
    // o valor digitado no campo de digitação da pagina
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input
                // aqui atravez do props é possivel saber o valor, 
                // o on change pega o valor digitado
                // required é para fazer o campo ser obrigatório
                // e o placeholder tambem é definido no app.js
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto