import styles from './projetos.module.css'
import { useState, useEffect } from 'react'
import projetosImg from '../../assets/projetosImg.svg'

const Projetos = () => {
    const [repository, setRepository] = useState ([])
    
    useEffect(()=> {
        async function getData(){
            const response = await fetch ('https://api.github.com/users/renata-amorim/repos')
            const data = await response.json()

            setRepository(data)
        }
        getData()

    }, [])
    
    return(
        <>
            <div className={styles.header}> 
                <h1> Projetos </h1> 
                <img src={projetosImg} />
            </div>

            <div className={styles.container}>
            <h1 className={styles.title}> Repositórios no Github </h1>
                <ul>
                {repository.map(item =>{
                return(
                    <div className={styles.repos} key={item.id}>
                        <li><h3>{item.name}</h3>
                        <p> {item.description} </p> 
                        <a href={item.html_url} target="_blank">Ver repositório</a>
                        </li>
                    </div>
                    )
            })}
            </ul>
            </div> 
        </>
    )
}

export default Projetos