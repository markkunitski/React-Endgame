import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyBtn from '../button/MyBtn';
import { AuthContext } from '../../../context/AuthContext';
const NavBar = () => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyBtn onClick={logout}>Log out</MyBtn>
            <div className="navbar__links">
                <button onClick={() => navigate(-1)}>Go Back</button>
                <Link to="/about">About us</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default NavBar;