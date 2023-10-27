import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function PostList({ posts, title, remove }) {
    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
    }
    return (

        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((info, index) =>
                    <CSSTransition
                        key={info.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index} post={info}></PostItem>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList 