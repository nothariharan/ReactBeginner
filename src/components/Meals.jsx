import React, { useEffect, useState } from 'react'
import '../style.css';
import axios from 'axios';

const Meals = () => {
    const [items,setItems] = useState([])
    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res =>{
            setItems(res.data.meals)
        }).catch((err)=>{
            console.log(err)
        })

    },[])
    const itemList = items.map(({strMeal,strMealThumb,idMeal}) =>{
        return(
            <section key={idMeal} className='card'>
                <img src={strMealThumb} alt={strMeal} />
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>${idMeal}</p>
                </section>

            </section>
        )
    })
  return (
    <div className='items-container'>{itemList}</div>
  )
}

export default Meals