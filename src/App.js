import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/UI/navbar/NavBar';
import AppRouter from './Components/UI/AppRouter';
import { AuthContext } from './context/AuthContext';

const App = () => {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
		useEffect(()=>{
			if(localStorage.getItem('auth')){
				setIsAuth(true)
			}
			setIsLoading(false)
		})
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<BrowserRouter>
				<NavBar></NavBar>
				<AppRouter></AppRouter>
			</BrowserRouter>
		</AuthContext.Provider>

	);
};

export default App;