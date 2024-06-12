import Hamburger from "hamburger-react";
import React, { useEffect, useState, Suspense, useCallback } from "react";
import { getNodeData, getTreeData } from "../utils/api";
import TreeView from "./Treeview";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setData(getTreeData());
    setShow(getNodeData().shouldShow);
  }, []);
  return (
    data && (
      <div className="nav-wrapper">
        {isOpen && (
          <nav className="navbar">
            <Suspense fallback={<p>...</p>}>
              {show && <TreeView treeData={data} />}
            </Suspense>
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
