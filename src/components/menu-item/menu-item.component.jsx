import React from 'react';
import './menu-item.styles.scss'
import {Link} from 'react-router-dom'

//functional component
const MenuItem = ({title,id,subtitle, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className='menu-item'>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <Link to="/news">{title}</Link>
        <p>{subtitle}</p>
            </div>
</div>
)

export default MenuItem;