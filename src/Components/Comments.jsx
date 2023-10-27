import React, { useEffect, useState } from 'react'
import { useFetching } from './hooks/useFetching'
import PostService from './API/PostService'

const Comments = ({ params }) => {
    const [Comm, setComm] = useState([])
    const [fetchingComments, ComIsLoading, ComError] = useFetching(async (id) => {
        const response = await PostService.getComm(params.id)
        setComm(response.data)
    })
    useEffect(() => {
        fetchingComments(params.id)
      }, [])
    return (
        <>
          {Comm.map(element => (
            <div className='comment__parent' key={element.id}>
              <p>NAME: {element.name}</p>
              <p>EMAIL: {element.email}</p>
            </div>
          ))}
        </>
      )
}

export default Comments