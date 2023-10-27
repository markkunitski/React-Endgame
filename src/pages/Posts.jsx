import React, { useEffect, useRef, useState } from 'react';
import PostService from '../Components/API/PostService';
import PostFilter from '../Components/PostFilter';
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';
import MyBtn from '../Components/UI/button/MyBtn';
import MyLoading from '../Components/UI/loading/MyLoading';
import MyModal from '../Components/UI/modal/MyModal';
import MyPagination from '../Components/UI/pagination/MyPagination';
import { useFetching } from '../Components/hooks/useFetching';
import { usePosts } from '../Components/hooks/usePosts';
import { getPageCount } from '../utils/pages';
import { nanoid } from 'nanoid'
import { useObserver } from '../Components/hooks/useObserver';
import MySelect from '../Components/UI/select/MySelect';
function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', search: '' })
	const [modal, setModal] = useState(false)
	const sortedAndSearch = usePosts(posts, filter.sort, filter.search)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const lastElem = useRef()
	const [fetchPosts, isLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])
	const changePost = (page) => {
		setPage(page)
	}
	useObserver(lastElem, page < totalPages, isLoading, () => setPage(page + 1))
	return <div className='App'>
		<MyBtn style={{ marginTop: '30px' }} onClick={() => setModal(true)} >Create post</MyBtn>
		<MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}></PostForm></MyModal>
		<PostFilter
			filter={filter}
			setFilter={setFilter}
		></PostFilter>
		<MySelect
		value={limit}
		onChange={value => setLimit(value)}
		defaultValue='Ammount on the page'
		options={[
			{value: 5, name: '5'},
			{value: 10, name: '10'},
			{value: 25, name: '25'},
			{value: -1, name: 'Все'}
		]}
		></MySelect>
		{postError && <h1>Error accured ${postError}</h1>}
		<PostList remove={removePost} posts={sortedAndSearch} title={'Posts about JS'}></PostList>
		<div ref={lastElem} style={{ background: 'transparent', height: '10px' }}></div>
		{isLoading && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}><MyLoading></MyLoading></div>}
		<MyPagination page={page} changePost={changePost} totalPages={totalPages}></MyPagination>
	</div>;
}

export default Posts; 
