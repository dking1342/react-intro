
import React from 'react'


function Search({ handleInput, search, input }) {


    return (
        <section className="searchbox-wrap">
            <input  
                onChange={ handleInput } 
                onKeyPress={ search }
                type="text" placeholder="Enter Movie Here..." 
                className="searchbox"
                value={ input.search }
            />
        </section>
    )
}

export default Search
