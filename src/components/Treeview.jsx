import { useState } from "react";
import { useNavigate } from "react-router";
import { categories } from "../utils/categories";

const TreeView = ({ treeData = [], shouldShow }) => {
  const [openIds, setOpenIds] = useState([]);
  const navigate = useNavigate();

  const toggleBranch = (id) => {
    const tempState = [...openIds];
    const isOpen = tempState.includes(id);

    if (isOpen) {
      const target = tempState.indexOf(id);
      tempState.splice(target, 1);
    } else {
      tempState.push(id);
    }

    setOpenIds(tempState);
  };

  const handleNavigate = (label, name, id) => {
    label === "cat1"
      ? navigate(`/industries/${name}`)
      : navigate(`${categories[label]}/${id}`);
  };

  const handleSpanClass = (leaf, isOpen) => {
    if (
      leaf.children.every((child) => {
        return child.name.includes("NO_LABEL");
      })
    ) {
      return "no-arrow";
    }

    if (isOpen) {
      return "open";
    }
    return "not-open";
  };

  return (
    <ul>
      {treeData.map((leaf) => {
        const isOpen = openIds.includes(leaf.id);

        return !leaf.name.includes("NO_LABEL") ? (
          <li key={leaf.id}>
            <div
              className="list-item"
              data-id={leaf.id}
              onClick={() => handleNavigate(leaf.label, leaf.name, leaf.id)}
            >
              <span
                onClick={() =>
                  toggleBranch(leaf.id, leaf.label, leaf.children, leaf.name)
                }
                className={handleSpanClass(leaf, isOpen)}
              ></span>
              {!leaf.name.includes("NO_LABEL") && leaf.name}
            </div>
            {leaf.children && isOpen && (
              <TreeView key={leaf.id} treeData={leaf.children} />
            )}
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default TreeView;
