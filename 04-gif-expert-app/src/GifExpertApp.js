import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Goku'])

   return (
      <div className="container">
         <h1 id="title" className="mt-5">Giph App</h1>
         <AddCategory setCategories={setCategories} />
         {
            categories.map((category, i) => {
               return <span key={i} className="badge badge-dark mt-3 mr-2">{category}</span>
            })
         }
         <hr className="separator" />

         {
            categories.map((category, i) =>
               <GifGrid key={i} category={category} />
            )
         }

      </div >
   )
}
