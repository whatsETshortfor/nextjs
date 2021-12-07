import Header from "../components/Header";
import Footer from "../components/Footer";
import Stack from "react-bootstrap/Stack";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Stack gap={0}>
        <div>
          <Header />
        </div>
        <div className="darktheme">{props.children}</div>
        <div>
          <Footer />
        </div>
      </Stack>
    </>
  );
}
