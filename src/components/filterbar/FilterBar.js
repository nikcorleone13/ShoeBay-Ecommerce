import React, { useContext, useState } from 'react'
import "./filterbar.css"

import { ProductsDataContext } from '../../contexts/ProductsContext';

export const FilterBar = () => {
    const [rangeValue, setRangeValue] = useState(100);
    const [categoryBox, setCategoryBox] = useState({ category1: false, category2: false, category3: false });
    const [ratingBox, setRatingBox] = useState({ above1: false, above2: false, above3: false, above4: false, });
    const [sortBox, setSortBox] = useState({ lowTohigh: false, highToLow: false });

    const { dispatch, data } = useContext(ProductsDataContext);
    // handle rangebar input
    const handleRange = (e) => {
        setRangeValue(e.target.value);
    }

    // RESETTING ALL FILTERS
    const resetFilters = () => {
        dispatch({ type: "INITIAL_API_DATA", payload: data })
        setRangeValue(100);
        setCategoryBox({ checkbox1: false, checkbox2: false, checkbox3: false });
        setRatingBox({ above1: false, above2: false, above3: false, above4: false, });
        setSortBox({ lowTohigh: false, highToLow: false });
    }
    return (
        <div className='filter-wrapper'>

            <div className='filter-container'>

                <p className='reset-filters' onClick={() => resetFilters}>Reset Filters</p>

                <div className='range-filter' >
                    <p>Price</p>
                    <label>Rs: {rangeValue}</label>
                    <input type='range'
                        onChange={handleRange}
                        value={rangeValue}
                        min="100"
                        max="30000" />
                </div>

                {/* <div className='category-filter' >
                    <p>Category</p>

                    <div className='input-wrapper'>
                        <div className='label-div'>
                            <label>Sneakers</label>
                            <label>Running</label>
                            <label>Casual</label>
                        </div>
                        <div className='checkbox-div'>

                            <input type='checkbox' checked={categoryBox.category1} onChange={() => setCategoryBox({ ...categoryBox, category1: !categoryBox.category1 })}
                            />

                            <input type='checkbox' checked={categoryBox.category2} onChange={() => setCategoryBox({ ...categoryBox, category2: !categoryBox.category2 })}
                            />

                            <input type='checkbox' checked={categoryBox.category3} onChange={() => setCategoryBox({ ...categoryBox, category3: !categoryBox.category3 })}
                            />
                        </div>
                    </div>

                </div> */}

                <div className='ratings-filter'>
                    <p>Ratings</p>

                    <div>
                        <label>1 star and above</label>
                        <input type='checkbox' checked={ratingBox.above1}
                            onChange={() => setRatingBox({ ...ratingBox, above1: !ratingBox.above1 })}
                        />
                    </div>

                    <div>
                        <label>2 star and above</label>
                        <input type='checkbox' checked={ratingBox.above2}
                            onChange={() => setRatingBox({ ...ratingBox, above2: !ratingBox.above2 })} />
                    </div>

                    <div>
                        <label>3 star and above</label>
                        <input type='checkbox' checked={ratingBox.above1}
                            onChange={() => setRatingBox({ ...ratingBox, above3: !ratingBox.above3 })} />
                    </div>

                    <div>
                        <label>4 star and above</label>
                        <input type='checkbox' checked={ratingBox.above4}
                            onChange={() => setRatingBox({ ...ratingBox, above4: !ratingBox.above4 })} />
                    </div>
                </div>

                <div className='sort-filter'>
                    <p>Sort by Price</p>

                    <div>
                        <label>Low-to-High</label>
                        <input type='checkbox' checked={sortBox.lowTohigh}
                            onChange={() => setSortBox({ ...sortBox, lowTohigh: !sortBox.lowTohigh })}
                        />

                    </div>
                    <label>High-to-Low</label>
                    <input type='checkbox' checked={sortBox.highToLow}
                        onChange={() => setSortBox({ ...sortBox, highToLow: !sortBox.highToLow })} onClick={dispatch({ type: "HTL", payload: data })} />
                    <div>

                    </div>
                </div>

            </div>

        </div>
    )
}
