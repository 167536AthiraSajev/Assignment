import React from 'react';
import './article-item.styles.scss';

//functional component

const ArticleItem = ({id,name,price,imageUrl}) => (
    <div className="article-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="article-footer">
                <span className='name'>{name}</span>
                <span className='id'>{id}</span>
                </div>
          </div>
    </div>
)

export default ArticleItem;