import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
const menuItem = ({title,imageUrl,size,history,linkUrl,match}) =>(


    <div 
        style={{backgroundImage:`url(${imageUrl})`
    }}
     
    className={`${size} menu-item`} onClick={() =>history.push(`${match.url}${linkUrl}`)}>
     <div className='background-imag' ></div>
    
    <div className='content'>
     <h1 className='title'>{title}</h1>
     <span className='subtitle'>MEN</span>
    
    </div>
    </div>


)

export default withRouter(menuItem);