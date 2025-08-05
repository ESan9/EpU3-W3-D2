import React from "react";
import { Row } from "react-bootstrap";
import { Article } from "../types/Article";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: Article[];
}

export const ArticleList: React.FC<Props> = ({ articles }) => (
  <Row>
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </Row>
);
