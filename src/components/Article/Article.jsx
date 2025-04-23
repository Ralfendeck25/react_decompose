import React from 'react';
import './Article.css';

const Article = ({ title, content }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Article;
