import styles from './comentarios.module.css'
import comentariosImg from '../../assets/comentariosImg.svg'
import { FiHeart, FiTrash2 } from 'react-icons/fi'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'

function Comentarios() {
    const getLocalStorage = () => {
        let items = localStorage.getItem('list')

        if(items) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return []
        }           
    }


    const [list, setList] = useState(getLocalStorage)
    const [task, setTask] = useState('')

    function handleInput(event) {
        setTask(event.target.value)
    }

    function handleCreateTask() {
        const newTask = {
            id: nanoid(),
            title: task
        }

        if(newTask.title ==='') {
            return
        }
       
        setList([...list, newTask])

        setTask('')
    }

    function handleRemoveTask(id) {
        const taskFiltered = list.filter(item => item.id !== id)
        setList(taskFiltered)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))

    }, [list])

    return(
        <>
        <div className ={styles.header}>
            <h1>Deixe um comentário</h1>
            <img src={comentariosImg} />
        </div>

        <div className={styles.inputContainer}>
            <input className={styles.input} type ="text" placeholder='Digite sua mensagem' onChange={handleInput} value={task} />
            <div className={styles.addContainer}> 
            <button className={styles.addTask} type="submit" onClick={handleCreateTask}>
                <FiHeart size={16} color="#eaeaea"/>
            </button>
            </div>
        </div> 

        <main>
            <ul className={styles.listItems}>
                {list.map( item => {
                    return(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <button className={styles.removeTask} onClick={() => handleRemoveTask(item.id)}>
                                <FiTrash2 size={16} />
                            </button>
                        </li>
                    )
                })}
            </ul>

        </main>
        </>
    )
}


export default Comentarios