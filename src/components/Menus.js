import React, {useState, useEffect} from 'react';
import Header from './Header';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';

function Menus(){
    let [menu, setMenu] = useState([])
    let [menuCategory, setMenuCategory] = useState([])
    let [loading, setLoading] = useState(true)
    let [singleDish, setSingleDish] = useState([])


    async function getAllMenus(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)

    }

    async function getAllCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let CategoryData = await response.json()
        setMenuCategory(CategoryData.categories)
        setLoading(false)

    }
    async function getOnlyOneDish(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
        let response = await fetch(API_URL)
        let SingleDishData = await response.json()
        setSingleDish(SingleDishData.meals)
        

    }

    useEffect(async()=>{
        getAllMenus();
        getAllCategories();
        getOnlyOneDish();
    },[])
    

    let menuImages = menu.map((item)=>{
        return(
            <img src={item.strMealThumb} alt="" />

        )

    })
    return(
    <div>
        <Navbar />
        <Header />
        {!loading ? <SpecialDishes specialMenu={menu} /> : <Loader />}
        
        {!loading ? <FilteredDishes allMenuCategories = {menuCategory} allMenu={menu} singleDish={singleDish} setSingleDish={setSingleDish} /> : null } 
        <Footer />
    </div>
    
    )
}
export default Menus;