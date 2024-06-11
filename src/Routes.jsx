import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Page from "./views/Page";
import PageComponent from "./components/Page";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageComponent heading="Home" />} />
        <Route path="industries/:name" element={<Page label="cat1" />} />
        <Route path={`categoryTwo/:id`} element={<Page label="cat2" />} />
        <Route path={`categoryThree/:id`} element={<Page label="cat3" />} />
        <Route path={`categoryFour/:id`} element={<Page label="cat4" />} />
        <Route path={`categoryFive/:id`} element={<Page label="cat5" />} />
        <Route path="*" element={<PageComponent heading="Not Found" />} />
      </Route>
    </Routes>
  );
};
