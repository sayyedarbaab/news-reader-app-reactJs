import { useEffect, useState } from "react";
import axios from "axios";
import styled from './cricket.module.css'
import { Link } from "react-router-dom";

function Cricketnews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=804b5ac5eb154a81ad4dc4b10ada6b7f"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <>
    <div className="container my-5">
      <div className="row text-center">
      {/* USING MAP FUNCTION */}
        {
        news.map((val) => {
         return (
            <div className="col">
            <div className={styled.card} style={{ width: "18rem" }}>
              <img src={val.urlToImage} className="card-img-top" alt="..." />
              
              <div className="card-body">
                <h5 className=''>{val.title}</h5>
                <p className="card-text">
                  {val.description}
                </p>

                <Link to='/News_Detail_1' className="btn btn-primary">
                  <button href={val.url}>Go somewhere</button>
                </Link>
              </div>
            </div>
          </div>
         )
        })}
      </div>
    </div>
    </>
  );
}
export default Cricketnews;
