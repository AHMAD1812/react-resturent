import React from 'react'

export const Navbar = ({categories,getCategory}) => {
  return (
    <>
    <div className='navbar'>
        <div className='btn-group'>
            {
                categories.map((category)=>{
                    return (
                        <button className='btn-group__item' onClick={()=>getCategory(category)}>{category}</button>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}
