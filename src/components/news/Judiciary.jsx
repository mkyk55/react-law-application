import './Judiciary.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const API_KEY = 'pub_549881bf9dc24adb89a04c248b8ba14c'; // Replace with your NewsData.io or GNews API key
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=judiciary&country=in&language=en`;

const Judiciary = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-container">
      <h1 className='title'>Judiciary News</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="news-list">
          {articles.map((article, i) => (
            <div className="news-card" key={i}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Judiciary;