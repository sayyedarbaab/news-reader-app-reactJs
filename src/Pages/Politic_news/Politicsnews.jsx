// import { useEffect, useState } from "react";
// import axios from "axios";
import style_poli from './politics.module.css'
import newsData from '../Data/db.json'
function Politicsnews() {

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
        newsData.map((val) => {
         return (
            <div className="col">
            <div className={style_poli.card} style={{ width: "18rem" }}>
              <img src={val.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className=''>{val.title}</h5>
                <p className="card-text">
                  {val.description}
                </p>
                <a href="/News_Detail_1" className="btn btn-primary">
                  <button href={val.url}>Go somewhere</button>
                </a>
              </div>
            </div>
          </div>
         )
        })}
      </div>
    </div>
  );
}
export default Politicsnews;
