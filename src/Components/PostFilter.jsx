import React from 'react'
import MyBtn from './UI/button/MyBtn'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder={'Найти'}
                value={filter.search}
            ></MyInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}


                defaultValue={'Сортировать по'} >
            </MySelect>
        </div>
    )
}

export default PostFilter