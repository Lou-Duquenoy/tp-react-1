import { NavLink } from "react-router-dom";

export default function MyNav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Menu</a>
            <NavLink to="/" className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink>
            <NavLink to="/comment" className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Comment</NavLink>
            <NavLink to="/users" className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Users</NavLink>
        </nav>
    )
}