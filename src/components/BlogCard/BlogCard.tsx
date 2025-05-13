import "./BlogCard.css";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/utils.ts";

interface BlogCardProps {
  id: string;
  image?: string;
  category: string;
  title: string;
  content: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  category,
  title,
  content,
  date,
}) => {
  return (
    <article className="blogCard">
      <Link to={`/singleBlog/${id}`}>
        <img src={image} alt="" />
        <p className="category">
          {category.slice(0, 1).toUpperCase()}
          {category.slice(1)}
        </p>
        <h1>{title}</h1>
        <p className="timeAgo">{timeAgo(date)}</p>
        <p>{content.substring(0, 200) + "..."}</p>
      </Link>
    </article>
  );
};

export default BlogCard;
