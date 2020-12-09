
import React, { useState, useEffect } from 'react';
import Li from './Li';


const Shop = () => {
    useEffect(()=>{
        fetchItems();
    },[])
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const todos = data.slice(0,10)
        console.log(todos);
        setItems(todos)
    }


    return(
        <div>
            <h1>Shop Page</h1>
            {
                items.map((item)=>(
                    <div key={ item.id }>
                        <Li 
                            title = { item.title }
                            userId = { item.userId }
                            items = { items }
                            item = { item } 
                            setItems = { setItems }                       
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Shop;