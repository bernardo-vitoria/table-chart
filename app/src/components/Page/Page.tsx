import "components/page/page.scss";

type PageProps = { withBorders?: boolean; children: JSX.Element };

const Page: React.FC<PageProps> = ({ withBorders, children }) => {
  return (
    <div
      className={`page ${withBorders ? "page--with_borders" : ""}`}
      data-testid="page"
    >
      {children}
    </div>
  );
};

export default Page;
