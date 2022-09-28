import styles from './habilidades.module.css'
import habilidadesImg from '../../assets/habilidadesImg.svg'

function Habilidades() {
    return (
        <>
        <div className={styles.header}>
            <h1>
                Habilidades
            </h1>
            <img src={habilidadesImg} alt="ilustração mulher negra"/>
        </div>

        <section className={styles.content}> 
            <div className={styles.cards}>
                <div className={styles.card}>
                <img className={styles.imagemCard}  src="https://camo.githubusercontent.com/1c75c1a1c5e05a10e68a855efb59503386b85a244e00ad33db2a38b0e8f99af0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6b48364371596971755a61776d55314849362f67697068792e676966" alt="gif logo git" />
                <div className={styles.textos}>
                    <h3 className={styles.subtituloCard}> Git</h3>
                    <p className={styles.texto}>O Git é um sistema de controle de versão de códigos, é usado <br/> pela grande maioria das pessoas desenvolvedoras atualmente.<br/> É usado para controlar o histórido de alterações do arquivo <br/> de projetos em desenvolvimento, seja individual ou em equipe.</p>
                </div>
                </div>
        
                <div className={styles.card}>
                <img className={styles.imagemCard}  src="https://media1.giphy.com/avatars/mwooodward/cIe5MvDvX4Vc.gif" alt="gif logo github" />
                <div className={styles.textos}>
                    <h3 className={styles.subtituloCard}> GitHub</h3>
                    <p className={styles.texto}>O GitHub é um site de hospedagem de códigos compartilhados.<br/> É usado por desenvolvedores de softwares.<br/> Os projetos podem ser privados e/ou de código aberto, podendo ser consultados por qualquer pessoa e em qualquer lugar do mundo.</p>
                </div>
                </div>
            </div>
        
        </section>

        <section className={styles.content}>
            <div className={styles.cards}>
                <div className={styles.card}>
                <img className={styles.imagemCard} src="https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif" alt="logo HTML5" />
                <div className={styles.textos}>
                    <h3 className={styles.subtituloCard}> HTML </h3>
                    <p className={styles.texto}> HTML (HyperText Markup Language) é uma linguagem de <br/> marcação de hipertexto, que cria a estrutura de uma página ou aplicação web, <br/> o conteúdo pode ter titulos, paragrafos, links, listas, tabelas, imagens e videos .</p>
                 </div>
                 </div>
            </div>

            <div className={styles.card}>
            <img className={styles.imagemCard} src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/08-15-57-53-68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f667345615a6c644e43384131504a336d77702f736f757263652e676966.gif" alt="logo CSS3" />
            <div className={styles.textos}>
                <h3 className={styles.subtituloCard}> CSS </h3>
                <p className={styles.texto}>CSS (Cascading Style Sheets) é uma linguagem que <br/> define estilos visual do site, como cor do fundo, as cores das letras, <br/> tipo de fonte e tamanho, espaçamento do texto, etc.</p>
            </div>
            </div>
        </section>

        <section className={styles.content}>
        <div className={styles.cards}>
            <div className={styles.card}>
            <img className={styles.imagemCard} src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/08-15-58-36-68747470733a2f2f6d65646961332e67697068792e636f6d2f6d656469612f6c6e377a32655772696951416c6c6656636e2f736f757263652e676966.gif" alt="logo JavaScript" />
            <div className={styles.textos}>
                <h3 className={styles.subtituloCard}> JavaScript </h3>
                <p className={styles.texto}> Javascript é uma linguagem de programação, que usa lógica. <br/> A linguagem permite adicionar itens complexos em páginas web, <br/> comojogos, formulários, cálculos, etc. </p>
            </div>
            </div>
        </div>  

        <div className={styles.card}>
        <img className={styles.imagemCard} src="https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952g92hv1w3o43zywttx7t2qpm3llsxqbkqmz2jseek&rid=giphy.gif&ct=s" alt="logo react"/>
            <div className={styles.textos}>
                 <h3 className={styles.subtituloCard}> React </h3>
                 <p className={styles.texto}>React é uma biblioteca JavaScript declarativa, <br/> eficiente e flexível para criar interfaces com a pessoa usuária. <br/> O react permite compor interfaces complexas a partir de códigos <br/> pequenos e isolados, chamados “componentes”.</p>
        </div>
        </div>  
        </section> 
        </>     
    )
}

export default Habilidades