
import React from 'react';
import { Link } from 'react-router-dom';

const Li = ({ title, userId, items, item, setItems }) => {


    const deleteHandler = (e) => {
        setItems(items.filter(el=> el.id !== item.id))
    }

    return(
        <div>
            <Link to={`shop/${item.id}`}>
                <h1>{ item.id }</h1>
            </Link>
            <h1>{ title }</h1>
            <p>User: { userId }</p>
            <button onClick={ deleteHandler }>X</button>    

        </div>
    )
}

export default Li;