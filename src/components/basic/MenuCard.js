import React from 'react'

export const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {
        menuData.map((data)=>{
            return (
                <div className='card-container' key={data.id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{data.id}</span>
                        <span className='card-author subtle'>{data.category}</span>
                        <h2 className='card-title'>{data.name}</h2>
                        <span className='card-description subtle'>
                        {data.description}
                        </span>
                        <div className='card-read'>Read</div>
                    </div>
                    <img src={data.image} alt="images" className='card-media'/>
                    <span className='card-tag subtle'>Order Now</span>
                </div>
            </div>
            )
        })
    }
    </section>

    </>
  )
}
