import React from 'react'
import Slide from './Slide';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slides = ({ people, index, setIndex }) => {
    return (
        <div className="section-center">
        <Slide 
            people={ people }
            index = { index }
        />
        <button className="prev" onClick={ ()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={ ()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        </div>
    )
}

export default Slides
