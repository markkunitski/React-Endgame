import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { nanoid } from 'nanoid'

export const PrivateRoutes = [
    { path: '/about', component: <About></About>, id: nanoid(9) },
    { path: '/posts', component: <Posts></Posts>, id: nanoid(9) },
    { path: '/posts/:id', component: <PostIdPage></PostIdPage>, id: nanoid(9) }
]
export const PublicRoutes = [
    { path: '/login', component: <Login></Login>, id: nanoid(9) }]