import React from 'react'
import MyBtn from './UI/button/MyBtn'
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
	const navigate = useNavigate();

	function handleClick(id) {
	  navigate(`/posts/${id}`);
	}
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>{props.post.body}</div>
			</div>
			<div className='post__btns'>
				<MyBtn onClick={() => handleClick(props.post.id)}>Открыть</MyBtn>
				<MyBtn onClick={() => props.remove(props.post)}>Удалить</MyBtn>

			</div>
		</div>
	)
}

export default PostItem