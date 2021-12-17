import axios from "axios"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import {Link} from 'react-router-dom';

export default function Users() {

    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setTodos(res.data)

        })
    }, [])

    useEffect(() => {
        document.title="Nombre d'utilisateurs (" + todos.length + ")";
        // document.title = `Nombre de tâches (${todos.length})`;
    },[todos])

    return (
        <div>
            <h1>Il ya {todos.length} utilisateurs actuellement</h1>
            <ul>
                {todos.map(user => (
                    <li key={user.id}>
                        {user.name}
                        {user.username}
                        
                        <Link to={"/users/" + user.id} className="btn btn-primary">EN SAVOIR PLUS</Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}