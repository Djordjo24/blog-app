import "./BlogList.css";
import BlogCard from "../components/BlogCard/BlogCard";

interface BlogObject {
  id: string;
  image?: string;
  category: string;
  author: string;
  title: string;
  content: string;
  date: string;
}

interface BlogListProps {
  searchValue: string;
  filterCategory: string;
}

const BlogList: React.FC<BlogListProps> = ({ searchValue, filterCategory }) => {
  const blogs = JSON.parse(localStorage.getItem("Blogs") || "[]");
  const updatedBlogs = blogs.filter(
    (blog: BlogObject) =>
      (filterCategory ? blog.category === filterCategory : true) &&
      (searchValue
        ? blog.title.toLowerCase().includes(searchValue.toLowerCase())
        : true)
  );
  return (
    <div className="blogList">
      {updatedBlogs.length > 0 ? (
        updatedBlogs.map((blog: BlogObject) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            content={blog.content}
            date={blog.date}
          />
        ))
      ) : (
        <p className="noBlogs">There are no blogs. Write one.</p>
      )}
    </div>
  );
};

export default BlogList;
