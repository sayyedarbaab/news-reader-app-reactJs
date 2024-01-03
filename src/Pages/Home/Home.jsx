// import { useEffect, useState } from "react";
// import axios from "axios";
import style from './home.module.css'
import { Link } from "react-router-dom";
import newsData from '../Data/db.json'

function Home() {

  // fetch data from a paid News API, but due to deployment issues, it didn't work as expected. Later, you created a JSON file and a data folder to store your own data, and then successfully rendered this data in your UI
  // const [news, setNews] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=804b5ac5eb154a81ad4dc4b10ada6b7f"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setNews(res.data.articles);
  //     });
  // }, []);

  return (
    <div className="container my-5">
      <div className="row text-center">
        {
        newsData.slice(0,10).map((val) => {
         return (
            <div className="col">
            <div className={style.card} style={{ width: "18rem" }}>
              <img src={val.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className=''>{val.title}</h5>
                <p className="card-text">
                  {val.description}
                </p>
                <Link to='/news_detail_2' className="btn btn-primary">
                  <button>Go somewhere</button>
                </Link>
              </div>
            </div>
          </div>
         )
        })}
      </div>
    </div>
  );
}
export default Home;
