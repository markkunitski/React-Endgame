import React, { useState } from 'react'
function Counter() {
  const [likes, setLikes] = useState(0)
  return (
    <div>
      <h1>{likes}</h1>
		<button onClick={() => setLikes(likes + 1)}>increment</button>
		<button onClick={() => setLikes(likes - 1)}>decrement</button>
    </div>
  )
}

export default Counter