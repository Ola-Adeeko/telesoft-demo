import React from "react";
import "./style.css";

interface News {
  title: string;
  body: string;
  image: string;
}

interface Props {
  news: News;
}
const NewsCard = ({ news }: Props) => {
  return (
    <div className="news_card">
      <div className="news_card_content">
        <span className="news_card_content_icon"></span>
        <div className="news_card_content_cxt">
          <p className="news_card_content_head">{news.title}</p>
          <h3 className="news_card_content_main">{news.body}</h3>
        </div>
      </div>
      <div className="news_card_image">
        <img
          src={news.image}
          alt="news_image"
          className="news_card_image_img"
        />
        <div className="news_card_image_cover"></div>
      </div>
    </div>
  );
};

export default NewsCard;
