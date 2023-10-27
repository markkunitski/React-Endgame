import React, { createRef } from 'react'
import MyBtn from './UI/button/MyBtn'
import MyInput from './UI/input/MyInput'
import { nanoid } from 'nanoid'
import { useState } from 'react';

const PostForm = ({ create }) => {
    function addPost(e) {
        e.preventDefault()
        setPost({ title: '', body: '' })
        const  newPost = { ...post, id: 'Custom' }
        create(newPost)
    }
    const [post, setPost] = useState({ title: '', body: '' })
    return (
        <form action="">
            <MyInput
                value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} placeholder='Name'
            />
            <MyInput
                value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} placeholder='Description'
            />
            <MyBtn onClick={addPost}>CREATE</MyBtn>
        </form>
    )
}

export default PostForm