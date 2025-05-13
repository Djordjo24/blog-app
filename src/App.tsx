import "./App.css";
import Background from "./Background/Background";
import Homepage from "./Homepage/Homepage.tsx";
import BlogForm from "./components/BlogForm/BlogForm.tsx";
import SingleBlog from "./SingleBlog/SingleBlog.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Background>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blogForm" element={<BlogForm />} />
            <Route path="/singleBlog/:id" element={<SingleBlog />} />
            <Route path="/editBlog/:id" element={<BlogForm />} />
          </Routes>
        </BrowserRouter>
      </Background>
    </div>
  );
}

export default App;
