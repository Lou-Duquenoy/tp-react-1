import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

export default function UserDetails() {
    let params = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users/' + params.usersid)
        .then(res => setUser(res.data))
    }, []);
    if(user.length === 0) {
        return (<span>Loading...</span>)
    }
    return (
        <div>
            <h1>Les détails de l'utilisateur {params.usersid}</h1>
            <table>
                <th>Id: {user.id}</th>
                <tr>Name:{user.name}</tr>
                <tr>Username: {user.username}</tr>
                <tr>Email: {user.email}</tr>
                <tr>Address: {user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode},{user.address.geo.lat},{user.address.geo.lng}</tr>
                <tr>Phone: {user.phone}</tr>
                <tr>Website: {user.website}</tr>
                <tr>Company: {user.company.name},{user.company.catchPhrase},{user.company.bs}</tr>
                

            </table>
            
        </div>
    )
}