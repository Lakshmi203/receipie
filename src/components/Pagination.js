import React from 'react'

function Pagination(props) {
    let numberOfPages = []
    for (let i=1; i<=Math.ceil(props.filteredDishes.length/ props.itemsPerPage); i++){
        numberOfPages.push(i);
    }
    function showNextDishesHandler(pages){
        // console.log(pages.target.id)
        props.setCurrentPage(pages.target.id)
    }
    let pages = numberOfPages.map((item)=>{
        // console.log("item",item) 
        
        let activePage = props.currentPage === item ? "active" : ""
        return(
            <li id={item} className={activePage} onClick={showNextDishesHandler}>{item}</li>
        )
    })
  return (
    <ul className='pagination flex'>
        {pages}
    </ul>
  )
}

export default Pagination