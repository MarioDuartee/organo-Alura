import './Rodape.css'

const Rodape = () => {
    return(<div className="parteDeBaixo">
        <img className='imgFundo' src="imagens/fundo.png" alt="" />
        <section className="redesSociais">
            <img src="/imagens/fb.png" alt="fb" />
            <img src="/imagens/ig.png" alt="ig" />
            <img src="/imagens/tw.png" alt="tw" />
        </section>
        <section className="logo">
            <img src="/imagens/logo.png" alt="logo" />
        </section>
        <section className="desenvolvido">
            <p>Desenvolvido por Alura</p>
        </section>
    </div>

    )
}

export default Rodape