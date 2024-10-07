import styles from './home.module.css'
import renata from '../../assets/renata.jpg'


function Home() {
    return(
        <>
            <div className={styles.header}>
                <h1>
                    Renata Amorim
                </h1>
                <img src={renata} alt="Mulher negra com cabelo alisado"/>           
            </div>
            <div className={styles.subtitulo}>
                <p>Aos 32 anos, depois de me dedicar a Nutricão por 10 anos entre formação,<br/> pós graduação e atuação como Nutricionista, resolvi buscar novos horizontes.<br/> Sempre me interessei por elementos tecnológicos e ao pesquisar uma nova profissão,<br/> gostei da área de Front-end. Comecei estudar e me apaixonei,<br/> é muito legal ver as coisas ficando prontas *-* </p>
            </div>
            <div className={styles.subtitulo}>
                <p>Em 20222 me tornei mãe do Leandro!</p>
            </div>
        </>
        
    )
}

export default Home