import "./BlogForm.css";
import Header from "../Header/Header.tsx";
import Wrapper from "../Wrapper/Wrapper.tsx";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

interface BlogObject {
  id: string;
  image?: string;
  date: Date;
  category: string;
  author: string;
  title: string;
  content: string;
}

const Write = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!id) return;
    const blog = JSON.parse(localStorage.getItem("Blogs") || "[]").find(
      (blog: BlogObject) => blog.id === id
    );

    if (blog) {
      setAuthor(blog.author || "");
      setImage(blog.image || "");
      setCategory(blog.category || "life");
      setTitle(blog.title || "");
      setContent(blog.content || "");
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePublishPost = (e: React.FormEvent) => {
    e.preventDefault();
    const blogs = JSON.parse(localStorage.getItem("Blogs") || "[]");

    const updatedBlogs = id
      ? blogs.map((blog: BlogObject) =>
          blog.id === id
            ? {
                ...blog,
                image,
                category,
                author,
                title,
                content,
                date: new Date(),
              }
            : blog
        )
      : [
          ...blogs,
          {
            id: uuidv4(),
            image,
            category: category || "life",
            author,
            title,
            content,
            date: new Date(),
          },
        ];

    localStorage.setItem("Blogs", JSON.stringify(updatedBlogs));
    setAuthor("");
    setImage("");
    setCategory("");
    setTitle("");
    setContent("");
  };

  return (
    <div className="blogForm">
      <Header />
      <Wrapper>
        <form className="postForm" onSubmit={handlePublishPost}>
          <div className="photoFrame" onClick={handleImageInputClick}>
            {" "}
            {image ? (
              <img
                src={image}
                alt="Preview"
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "10px",
                  objectFit: "fill",
                }}
              />
            ) : (
              "+"
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          <select
            name="category"
            id="category-select"
            onChange={handleCategoryChange}
            value={category || "life"}
          >
            <option value="life">Life</option>
            <option value="music">Music</option>
            <option value="sport">Sport</option>
            <option value="tech">Tech</option>
            <option value="style">Style</option>
            <option value="cinema">Cinema</option>
          </select>

          <input
            className="author"
            type="text"
            value={author}
            onChange={handleAuthorChange}
            placeholder="Author"
          />

          <input
            className="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            rows={10}
            cols={33}
            value={content}
            onChange={handleContentChange}
            placeholder="Write your blog post here..."
          />
          <button type="submit">Publish</button>
        </form>
      </Wrapper>
    </div>
  );
};

export default Write;
