import React from 'react'

function Popup(props) {
  console.log("popup", props)
let dishDetails = props.allDishes.filter((menuItem)=>{
  return menuItem.strMeal == props.currentDish
}).map((item)=>{
  return(
    <div className="popup-content-data">
      <div className="popup-header">
        <img src={item.strMealThumb} alt="" />
        <h5 className='popup-header-category'>{item.strCategory}</h5>
      </div>
      <h2>{item.strMeal}</h2>
      <p>{item.strInstructions}</p>
      <ul className='dish-intgredients flex'>
        <li>{item.strIngredient1}</li>
        <li>{item.strIngredient2}</li>
        <li>{item.strIngredient3}</li>
        <li>{item.strIngredient4}</li>
      </ul>
    </div>
  )
})

  return (
    <div className='popup'>
        <div className="popup-content">
            {dishDetails}
            <button>Order Now</button>
            
        </div>   
        <h5 className='popup-close' onClick={props.closePopupHandler}>close</h5> 
    </div>
  )
}

export default Popup