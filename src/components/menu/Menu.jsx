
import { useState } from 'react'
import { List } from 'phosphor-react'
import { Link } from 'react-router-dom'
import styles from './menu.module.css'

function Menu() {
    const [open, setOpen] = useState(false)

    function handleMenu() {

        open ? setOpen(false) : setOpen(true)
    }
      
      return(
        <nav>
            <List className={styles.hamburguer} onClick={handleMenu} size={32} isOpen={open}/>
            <ul className={open ? styles.hamburguerOpen : styles.menu}>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/"> Home </Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/habilidades"> Habilidades </Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item} >
                    <Link className={open ? styles.linkOpen : styles.link} to="/projetos"> Projetos </Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item} >
                    <Link className={open ? styles.linkOpen : styles.link} to="/comentarios"> Comentarios </Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item} >
                    <Link className={open ? styles.linkOpen : styles.link} to="/contato"> Contato </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Menu