import React from 'react';
import './menu-item.styles.scss';
const menuItem = ({title,imageUrl,size}) =>(


    <div 
        style={{backgroundImage:`url(${imageUrl})`
    }}
     
    className={`${size} menu-item`}>
     <div className='background-imag' ></div>
    
    <div className='content'>
     <h1 className='title'>{title}</h1>
     <span className='subtitle'>MEN</span>
    
    </div>
    </div>


)

export default menuItem;