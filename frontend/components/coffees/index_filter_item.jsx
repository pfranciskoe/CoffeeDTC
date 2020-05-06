import React from 'react'

const IndexFilterItem = ({handleChange,filterName,filterValue,filterDisplay}) =>{
    return(
        <label>
            <input onChange={handleChange}
            type="checkbox" name={filterName} value={filterValue}/>{filterDisplay}
        </label>
    )
}
export default IndexFilterItem
