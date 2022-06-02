import React, { useState, useEffect } from 'react'

const EffectTutorial = () => {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [payload,setPayload] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      if(response.ok){
        setPayload(await response.json());
      } else {
        setError("Error when fetching")
      }
    } catch (err) {
      console.log("error here", err)
      setError(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  
  if(loading){
    return(
      <div>loading...</div>
    )
  }

  if(!loading && Boolean(error)){
    return (
      <div>
        <h1>Error</h1>
        <p>{ error }</p>
      </div>
    )
  }

  if(!loading && Boolean(payload)){
    return (
      <div>
        <h1>UseEffect Example</h1>
        <div>
          {
            payload.map(comment =>
              <div key={comment.id}>
                <h3>{ comment.name }</h3>
                <p>{ comment.body }</p>
                <p>Email: { comment.email }</p>
                <p>Post: { comment.postId }</p>
              </div>  
            )
          }
        </div>
      </div>
    )
  }

}

export default EffectTutorial