import './App.css';

import Home from './pages/Home'
import Users from './Users';
import UsersDetails from './pages/UsersDetails';
import Comment from './pages/Comment';
import MyNav from './MyNav';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <MyNav/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:usersid" element={<UsersDetails/>} />
     </Routes>
    </div>
  );
}

export default App;
