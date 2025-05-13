import "./BlogLayout.css";
import BlogList from "../BlogList/BlogList";
import Sidebar from "../Sidebar/Sidebar.tsx";
import { useState } from "react";

interface BlogLayoutProps {
  searchValue: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ searchValue }) => {
  const [filterCategory, setFilterCategory] = useState<string>("");
  return (
    <div className="blogLayout">
      <BlogList searchValue={searchValue} filterCategory={filterCategory} />
      <Sidebar setFilterCategory={setFilterCategory} />
    </div>
  );
};

export default BlogLayout;
