import Wrapper from "../components/Wrapper/Wrapper.tsx";
import Header from "../components/Header/Header.tsx";
import CoverImage from "../CoverImage/CoverImage.tsx";
import BlogLayout from "../BlogLayout/BlogLayout.tsx";
import { useState } from "react";

const Homepage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="homepage">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <CoverImage />
      <Wrapper>
        <BlogLayout searchValue={searchValue} />
      </Wrapper>
    </div>
  );
};

export default Homepage;
