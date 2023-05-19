import React from 'react'
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_artical'>
      <div className='gpt3__blog-container_artical-image'>
           <img src={imgUrl} alt='blog'/>
      </div>
      <div className='gpt3__blog-container_artical-content'>
            <div>
              <p>{date}</p>
              <h3>{title}</h3>
            </div>
            <p>Read full Article</p>
      </div>
    </div>
  )
}

export default Article