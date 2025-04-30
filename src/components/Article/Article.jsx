import './Article.css';

const Article = ({ title, children }) => (
  <article className="article">
    <h1 className="article__title">{title}</h1>
    {children}
  </article>
);

export default Article;
