import PageComponent from "../components/Page";
import { useParams } from "react-router-dom";

const Page = ({ label }) => {
  const { name, id } = useParams();
  return <PageComponent heading={name || id} subheading={label} />;
};

export default Page;
