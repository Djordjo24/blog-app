import "./Sidebar.css";
import { Dispatch, SetStateAction, useState } from "react";
import { categories } from "../mockData/mockData.ts";

interface SidebarProps {
  setFilterCategory: Dispatch<SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilterCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const handleListItemClick = (cat: string) => {
    setFilterCategory(cat === "show all" ? "" : cat);
    setActiveCategory(cat);
  };
  return (
    <aside className="sidebar">
      <hr />
      <h4>CATEGORIES</h4>
      <hr />

      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleListItemClick(cat)}
          >
            {cat.slice(0, 1).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
