import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../pages/About'
import Error from '../../pages/Error'
import Posts from '../../pages/Posts'
import PostIdPage from '../../pages/PostIdPage';
import { PrivateRoutes, PublicRoutes } from '../../router/routes';
import { AuthContext } from '../../context/AuthContext';
import MyLoading from './loading/MyLoading';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
    if (isLoading){
        return <MyLoading></MyLoading>
    }

    return (
    isAuth
    ?
    <Routes>
    {PrivateRoutes.map(route => (
    <Route key={route.id} path={route.path} element={route.component} />))}
    <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes >
    :
    <Routes>
    {PublicRoutes.map(route => (
    <Route key={route.id} path={route.path} element={route.component} />))}
    <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes >
   
    )
   }

export default AppRouter