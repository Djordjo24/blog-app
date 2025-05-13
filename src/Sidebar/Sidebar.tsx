import { Dispatch, SetStateAction } from "react";
import "./Sidebar.css";

interface SidebarProps {
  setFilterCategory: Dispatch<SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilterCategory }) => {
  const categories = ["life", "music", "sport", "tech", "style", "cinema"];

  const handleListItemClick = (cat: string) => {
    setFilterCategory(cat);
  };
  return (
    <aside className="sidebar">
      <hr />
      <h4>CATEGORIES</h4>
      <hr />

      <ul>
        {categories.map((cat) => (
          <li key={cat} onClick={() => handleListItemClick(cat)}>
            {cat.slice(0, 1).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
