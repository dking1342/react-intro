

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({ match }) => {
    useEffect(()=>{
        fetchItem();     
        console.log(match);   
    },[])
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ match.params.id }`);
        const data = await response.json();
        console.log(data);
        setItem(data)
    }


    return(
        <div>
            <h1>{ item.title }</h1>
            <p>{ item.body }</p>
            <p>{ item.userId }</p>

        </div>
    )
}

export default ItemDetail;