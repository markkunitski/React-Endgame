import React, { useContext } from 'react'
import MyInput from '../Components/UI/input/MyInput'
import MyBtn from '../Components/UI/button/MyBtn'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {isAuth, setIsAuth}= useContext(AuthContext)
    const Login = (e) => { 
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
     }
    return (
    <div>
        <h1>Log in page</h1>
        <form onSubmit={Login} action="">
        <MyInput placeholder={'Login'}></MyInput>
        <MyInput autoComplete='user-password' type='password' placeholder={'Password'}></MyInput>
        <MyBtn>Войти</MyBtn>
        </form>
    </div>
  )
}

export default Login