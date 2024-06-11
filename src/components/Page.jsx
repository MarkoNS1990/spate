import "./Page.css";

const Page = ({ heading, subheading }) => {
  return (
    <article>
      <header>
        <h1>{heading}</h1>
        {subheading ? <h2>{subheading}</h2> : null}
      </header>
    </article>
  );
};

export default Page;
