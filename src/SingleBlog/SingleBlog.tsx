import "./SingleBlog.css";
import Header from "../components/Header/Header.tsx";
import Wrapper from "../components/Wrapper/Wrapper.tsx";
import { timeAgo } from "../utils/utils.ts";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface BlogObject {
  id: string;
  image?: string;
  date: string;
  author: string;
  title: string;
  content: string;
}

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogObject | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("Blogs") || "[]");
    setBlog(blogs.find((blog: BlogObject) => blog.id === id));
  }, [id]);

  const handleEditClick = () => {};

  const handleDeleteClick = () => {
    dialogRef.current?.showModal();
  };

  const handleConfirmDeletionClick = () => {
    const blogs = JSON.parse(localStorage.getItem("Blogs") || "[]");
    const filteredBlogs = blogs.filter((blog: BlogObject) => blog.id !== id);
    localStorage.setItem("Blogs", JSON.stringify(filteredBlogs));
  };

  const handleRejectDeletionClick = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="singleBlog">
      <Header />
      <Wrapper>
        <div className="singleBlogContainer">
          <img src={blog?.image} />
          <div className="actionButtons">
            <Link to={`/editBlog/${id}`}>
              <button className="editBlog" onClick={handleEditClick}>
                <FaRegEdit />
              </button>
            </Link>
            <button className="deleteBlog" onClick={handleDeleteClick}>
              <IoTrashOutline />
            </button>
          </div>
          <h1>{blog?.title}</h1>
          <div className="postMeta">
            <h3>
              Author: <strong>{blog?.author}</strong>
            </h3>
            <p>{blog && timeAgo(blog.date)}</p>
          </div>
          <p>
            <strong style={{ fontSize: "25px" }}>
              {blog?.content.slice(0, 1).toUpperCase()}
            </strong>
            {blog?.content.slice(1)}
          </p>
        </div>
      </Wrapper>
      <dialog ref={dialogRef} className="deleteModal">
        <p>Are you sure you want to permanently delete this blog post?</p>
        <div className="modalButtons">
          <Link to="/">
            <button
              className="confirmDeletion"
              onClick={handleConfirmDeletionClick}
            >
              Yes
            </button>
          </Link>
          <button
            className="rejectDeletion"
            onClick={handleRejectDeletionClick}
          >
            No
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default SingleBlog;
