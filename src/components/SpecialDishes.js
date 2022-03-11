import React, {useState, useEffect} from 'react';
import Popup from "./Popup";

function SpecialDishes(props){
    console.log("specialDishes", props)
    let [showPopup, setshowPopup] = useState(false)
    let [currentDish, setCurrentDish] =useState('')

    function showPopupHandler(dishName){
        setshowPopup(true)
        setCurrentDish(dishName)
    }
    function closePopupHandler(){
        setshowPopup(false)
    }
    let maxSpecialMenu = 8;
    let specialMenu = props.specialMenu.map((item, index)=>{
        if(index < maxSpecialMenu){
            return(
            
                <li>
                    <a href="javaScript:;" onClick={()=>showPopupHandler(item.strMeal)}>
                    <img src={item.strMealThumb} className="br" />
                    <h3>{item.strMeal}</h3>
                    </a>
                </li>
            
        )
        }
        
    })

   
    return(
        <div className="special-container">
            {showPopup && <Popup closePopupHandler={closePopupHandler} currentDish={currentDish} allDishes={props.specialMenu} />}
            <div className="special-dishes container">
                <div className="container">
                    <div className="special-dishes-content text-center">
                        <h2>Our Special Dishes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia illum animi voluptate dolor labore ex placeat incidunt quae. Facere, eligendi</p>
                        
                    </div>
                    <div className="special-dishes-list">
                        <ul className="flex flex-wrap gap">
                            {specialMenu}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
            
    )
}
export default SpecialDishes;