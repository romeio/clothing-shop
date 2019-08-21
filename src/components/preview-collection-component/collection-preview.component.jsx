import React from 'react';
import './collection-preview.component.style.scss';
import './collection-preview.component.style.scss';
import collectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title ,items,imageUrl}) =>(

<div className='collection-preview'>

 <h1 className='title'>{title.toUpperCase()}</h1>
 <div className='preview'>
 
   {
       items.filter((item,indx)=> indx <4).map((item,title,imageUrl)=>(

     <collectionItem key={item.id}>{item.name}{item.imageUrl}</collectionItem>

       ))
   }
 
 
 </div>
</div>

    
)

export default CollectionPreview;