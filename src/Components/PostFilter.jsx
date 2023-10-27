import React from 'react'
import MyBtn from './UI/button/MyBtn'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder={'Find in a Posts'}
                value={filter.search}
            ></MyInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: 'title', name: 'Via NAME' },
                    { value: 'body', name: 'Via DISCRIPTION' }
                ]}


                defaultValue={'Sort By'} >
            </MySelect>
        </div>
    )
}

export default PostFilter