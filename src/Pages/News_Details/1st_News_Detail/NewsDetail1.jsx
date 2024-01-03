import React from 'react'
// import { useEffect, useState } from "react";
// import axios from "axios";
// import style_Detail from './News_Detail_1.module.css'
import newsData from '../../Data/db.json'
function NewsDetail1() {

  // fetch data from a paid News API, but due to deployment issues, it didn't work as expected. Later, you created a JSON file and a data folder to store your own data, and then successfully rendered this data in your UI
  //   const [news, setNews] = useState([]);
  //       useEffect(() => {
  //       axios
  //       .get(
  //       "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=804b5ac5eb154a81ad4dc4b10ada6b7f"
  //       )
  //       .then((res) => {
  //       console.log(res);
  //       setNews(res.data.articles);
  //     });
  // }, []);


  return (
    <>
     <div className="row text-center">
      {/* USING MAP FUNCTION */}
        {
        newsData.map((val) => {
         return (
            <>
            {/* <div className={style_Detail.card} style={{ width: "18rem" }}> */}
              <img src={val.img} className="card-img-top" alt="..." />
                <h2 className=''>{val.title}</h2>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
          </>
         )
        })}
      </div>
       
    </>
  )
}

export default NewsDetail1
