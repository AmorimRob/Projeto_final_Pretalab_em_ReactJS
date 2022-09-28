import styles from './footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer} >
            <p> Desenvolvido por Renata Amorim -<a href="https://github.com/renata-amorim" target="_blank" className={styles.link}> <i class="fab fa-github-square estilo-icon"></i> </a>
                 <a href="https://www.linkedin.com/in/renata-de-jesus-silva-amorim-20863a111/" target="_blank" className={styles.link}> <i class="fab fa-linkedin estilo-icon"></i> </a> 
             </p>
            
        </footer>   
    )
}

export default Footer