import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { getTreeData } from "../utils/api";
import TreeView from "./Treeview";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const renderTree = (tree) => {
    return (
      <div key={tree.id}>{tree.children && tree.children.map(renderTree)}</div>
    );
  };

  useEffect(() => {
    setData(getTreeData());
    console.log(getTreeData());
  }, []);
  return (
    data && (
      <div className="nav-wrapper">
        {isOpen && (
          <nav className="navbar">
            <TreeView treeData={data} />
          </nav>
        )}
        <div className="hamburger-wrapper">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    )
  );
};

export default Nav;
