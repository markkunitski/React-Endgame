import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../Components/hooks/useFetching';
import PostService from '../Components/API/PostService';
import MyLoading from '../Components/UI/loading/MyLoading';
import Comments from '../Components/Comments';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    useEffect(() => {
        fetchingPostById(params.id)
    }, [])
    return (<>
        <h1>POSTID of the page: {params.id}</h1>
        {isLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><MyLoading></MyLoading></div>
            : <div>{post.id}. {post.title}</div>
        }
        <h1 style={{ margin: '40px' }}>Comments</h1>
        <Comments params={params}></Comments>
    </>
    )
}

export default PostIdPage