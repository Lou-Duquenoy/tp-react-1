import { useState } from "react"

export default function Form() {
    const [users, setUsers] = useState([
        {pseudo: "Lou",message:"Bonjour"},
        {pseudo: "Axel",message:"Bienvenue"}
    ])
    const [pseudo, setFirstname] = useState("")
    const [message, setMessage] = useState("")
    function handleFirstname(event) {
        setFirstname(event.target.value)
    }
    function handleMessage(event) {
        setMessage(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("J'ai soumis le formulaire")

        const newUser = {pseudo: pseudo,message: message}
        console.log(newUser);

        // ...users -> ça récupère chacun des éléments de users,
        // et ça les met à la suite dans le nouveau tableau
        // ,newUser : ajoute à la fin notre nouvel utilisateur
        setUsers([...users, newUser]);

    }

    // let isVisible;
    // if(firstname === "") {
    //     isVisible = <span>Pas d'ajout en cours!</span>
    // }
    // else {
    //     isVisible =  <h3>Utilisateur en cours d'ajout: {firstname} </h3>
    // }

    // const isVisible = firstname === "" ?
    //     <span>Pas d'ajout en cours!</span>
    //     : <h3>Utilisateur en cours d'ajout: {firstname} </h3>

    return (
        <div className="container p-3 mb-2 bg-dark text-white">
            <h1>Mon formulaire</h1>
            {pseudo === "" ?
                <span>Pas d'ajout en cours!</span>
                : <h3>Utilisateur en cours d'ajout: {pseudo},{message} </h3>}

            <form onSubmit={handleSubmit}>
                <label>Pseudo</label>
                <input type="text" value={pseudo} onChange={handleFirstname} />
                <label>Message</label>
                <input type="text" value={message} onChange={handleMessage} />
                <button type="submit">OK</button>
            </form>

            <ul>
                {users.map(user => { 
                     return <tbody><li>Pseudo:{user.pseudo}</li><li>Message:{user.message}</li><br></br></tbody>             
                })}
            </ul>
        </div>
    )
}