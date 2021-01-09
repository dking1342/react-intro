import React from 'react'

const Board = (props) => {
    const drop = (e) => {
        e.preventDefault();
        const card_id=e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display='block';

        if(e.target.classList.value === 'board'){
            console.log(card_id);
            // console.log('drag', this);
            e.target.appendChild(card);
        }
    }

    const dragOver = e => {
        e.preventDefault();
    }


    return (
        <div 
            id={props.id} 
            onDrop={(e)=> drop(e)} 
            onDragOver={dragOver}
            className={props.className}
        >
           { props.children } 
        </div>
    )
}

export default Board
