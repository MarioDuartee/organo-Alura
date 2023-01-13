import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        debugger
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    // em todos o campos existe esses nomes diferentes
                    // eles trabalham como chave e objeto
                    // para quando ser usado como props.nomeEscritoAqui
                    // aqui é para definir a obrigatoriedade
                    obrigatorio={true}
                    // o label
                    label="Nome"
                    // o placeholder (orientação de campo)
                    placeholder='Digite seu nome'
                    // aqui o campo aoAlterado vai ser definido atravez de
                    // uma função declarada dentro do componente
                    // o valor do nome é '' (nenhum caracter)
                    // a função setNome é para alterar o value do 'nome' declarada mais acima, criada junto com setNome.
                    // setNome é apenas a função responsavel para alterar o Nome, assim funciona para qualquer outro declarado com useState
                    // se chamar setNome('Olá')
                    // a variavel nome tem value 'Olá'
                    aoAlterado={valor => setNome(valor)} />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder='Digite seu cargo'
                    aoAlterado={valor => setCargo(valor)} />

                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder='Digite o endereço de imagem'
                    aoAlterado={valor => setImagem(valor)} />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario