import data from "../assets/data.json";

export const getTreeData = () => {
  return data;
};

export const getNodeData = () => ({ shouldShow: Math.random() > 0.1 });
