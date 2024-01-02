import { useEffect, useState } from "react";
import axios from "axios";
import style_edu from './education.module.css'

function Educationnews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row text-center">
        {
        news.map((val) => {
         return (
            <div className="col">
            <div className={style_edu.card} style={{ width: "18rem" }}>
              <img src={val.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className=''>{val.title}</h5>
                <p className="card-text">
                  {val.description}
                </p>
                <a href="/News_Detail_1" className="btn btn-primary">
                  <button>Go somewhere</button>
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
export default Educationnews;
