import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { categories } from "../utils/categories";
import { getNodeData } from "../utils/api";

const TreeView = ({ treeData = [] }) => {
  const [openIds, setOpenIds] = useState([]);
  const navigate = useNavigate();
  const memoizedNodeData = useMemo(() => getNodeData().shouldShow, []);

  const toggleBranch = (id, label, children, name) => {
    const tempState = [...openIds];
    const isOpen = tempState.includes(id);
    if (children.length <= 1) {
      label === "cat1"
        ? navigate(`/industries/${name}`)
        : navigate(`${categories[label]}/${name}`);
    }

    if (isOpen) {
      const target = tempState.indexOf(id);
      tempState.splice(target, 1);
    } else {
      tempState.push(id);
    }

    setOpenIds(tempState);
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

        return !leaf.name.includes("NO_LABEL") && memoizedNodeData ? (
          <li key={leaf.id}>
            <div
              className={handleSpanClass(leaf, isOpen)}
              data-id={leaf.id}
              onClick={() =>
                toggleBranch(leaf.id, leaf.label, leaf.children, leaf.name)
              }
            >
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
