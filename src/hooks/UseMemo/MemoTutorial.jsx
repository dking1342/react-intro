import React, { useEffect, useMemo, useState } from 'react'

const MemoTutorial = () => {
  const [toggle, setToggle]=useState(false);

  const useFetch = () => {
    let [initialState,setInitialState]=useState({
      loading:false,
      data:null,
      error:null
    })

    useEffect(() => {
      const fetchRequest = async () => {
        setInitialState((prevState)=>({
          ...prevState,
          loading:true
        }))
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/comments");
          if(response.ok){
            const data = await response.json();
            setInitialState((prevState) => ({
              ...prevState,
              data
            }));
          } else {
            setInitialState((prevState) => ({
              ...prevState,
              error:"Error when fetching"
            }))
          }
        } catch (error) {
          setInitialState((prevState)=>({
            ...prevState,
            error
          }))
        } finally {
          setInitialState((prevState)=>({
            ...prevState,
            loading:false
          }))  
        }
      }
      fetchRequest();
    },[])

    return initialState;
  };

  const { loading, data, error } = useFetch();

  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = "";
    for(let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if(currentName.length > longestName.length){
        longestName = currentName;
      }
    }
    console.log("this was computed");
    return longestName;
  }

  const getMemoizedLongestName = useMemo(() => findLongestName(data),[data]);
  // const getMemoizedLongestName = useMemo(() => findLongestName(data),[toggle]);


  if(loading){
    return <div>loading...</div>
  }

  if(!loading && Boolean(error)){
    return (
      <div>
        <h1>Error</h1>
        <p>{ error }</p>
      </div>
    )
  }

  if(!loading && Boolean(data)){
    return (
      <div>
        <h1>Memo Tutorial</h1>
        {/* <p>{ findLongestName(data) }</p> */}
        <p>{ getMemoizedLongestName }</p>
        <button onClick={()=>setToggle(!toggle)}>Toggle Text</button>
        { toggle && <h4>toggle secret text</h4> }
      </div>
    )
  }

}

export default MemoTutorial