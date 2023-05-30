import React, { useState } from 'react'
import "./filterbar.css"

export const FilterBar = () => {
    const [rangeValue, setRangeValue] = useState(10000);

    const handleRange = (e) => {
        setRangeValue(e.target.value);
    }
    return (
        <div className='filter-wrapper'>

            <div className='filter-container'>

                <p className='reset-filters'>Reset Filters</p>

                <div className='range-filter' >
                    <p>Price</p>
                    <label>Rs: {rangeValue}</label>
                    <input type='range'
                        onChange={handleRange}
                        min="0"
                        max="30000" />
                </div>

                <div className='category-filter' >
                    <p>Category</p>

                    <div className='input-wrapper'>
                        <div className='label-div'>
                            <label>Sneakers</label>
                            <label>Running</label>
                            <label>Casual</label>
                        </div>
                        <div className='checkbox-div'>
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                        </div>
                    </div>

                </div>

                <div className='ratings-filter'>
                    <p>Ratings</p>

                    <div>
                        <label>1 star and above</label>
                        <input type='checkbox' />
                    </div>

                    <div>
                        <label>2 star and above</label>
                        <input type='checkbox' />
                    </div>

                    <div>
                        <label>3 star and above</label>
                        <input type='checkbox' />
                    </div>

                    <div>
                        <label>4 star and above</label>
                        <input type='checkbox' />
                    </div>
                </div>

                <div className='sort-filter'>
                    <p>Sort by Price</p>

                    <div>
                        <label>High-to-Low</label>
                        <input type='checkbox' />
                    </div>

                    <div>
                        <label>Low-to-High</label>
                        <input type='checkbox' />
                    </div>
                </div>

            </div>

        </div>
    )
}
