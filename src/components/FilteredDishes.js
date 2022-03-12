
import React, { useState } from 'react'
import Pagination from './Pagination'
import Popup from './Popup'

function FilteredDishes(props) {
 
    let [filteredDishes, setFilteredDishes] = useState([null])
    let [activeDish, setActiveDish] = useState()
    let [currentPage, setCurrentPage] = useState(1)
    let [itemsPerPage, setItemsPerPage] = useState(4)
    let [showPopup, setshowPopup] = useState(false)
    let [currentDish, setCurrentDish] =useState('')

    function showPopupHandler(dishName){
        setshowPopup(true)
        setCurrentDish(dishName)
    }
    function closePopupHandler(){
        setshowPopup(false)
    }

    let indexOfLastDish = currentPage * itemsPerPage
    let indexOfFirstDish = indexOfLastDish - itemsPerPage

    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish)

    function showFilteredDishesHandler(category){
        props.setSingleDish([])
        setActiveDish(category)
        let filteredDishesAre = props.allMenu.filter((item)=>{
            return item.strCategory === category
        }).map((item)=>{
            return(
                <li>
                    <a href="javaScript:;" onClick={()=>showPopupHandler(item.strMeal)}>
                        <img src={item.strMealThumb} className="br" />
                        <h3>{item.strMeal}</h3>
                    </a>
                    
                </li>
            )
        })
        
        setFilteredDishes(filteredDishesAre)

    }
    
    let allCategories = props.allMenuCategories.map((item)=>{
        let activeCategory = item.strCategory === activeDish ? "active" : ""
        return(
            <li className={`category-list ${activeCategory}`} onClick={()=>showFilteredDishesHandler(item.strCategory)}>{item.strCategory}</li>
        )
    })
    let singledata = props.singleDish.map((item)=>{
        return(
            <li>
                <a href="javaScript:;" onClick={()=>showPopupHandler(item.strMeal)}>
                    <img src={item.strMealThumb} className="br" />
                    <h3>{item.strMeal}</h3>    
                </a>
                
            </li>
        )
    })

  return (
    
    <div className="filtered-dishes section">
        {showPopup && <Popup closePopupHandler={closePopupHandler} currentDish={currentDish} allDishes={props.allMenu} />}
        <div className="container">
            <div className="filtered-dishes-content text-center">
                <h2>Choose your dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia illum animi voluptate dolor labore ex placeat incidunt quae. Facere, eligendi</p>
            </div>

            <div className="filtered-dishes">
                <ul className='category'>
                    {allCategories}
                </ul>
            </div>   

            <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap">
                        {singledata}
                        {filteredDishes.length !== 0 ? showTheseDishesNow : <div className='alert'><h4>Sorry no item found</h4><br /><h3>Try another dishes</h3></div> }
                    </ul>

            </div>
            <Pagination filteredDishes={filteredDishes} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        
    </div>
   
  )
}

export default FilteredDishes