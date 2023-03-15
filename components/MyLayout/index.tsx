import BackToTopButton from "../BackToTopButton";
import Header from "../Header";
import Navbar from "../Navbar";

interface MyLayoutProps {
  children: React.ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <BackToTopButton />
    </>
  );
};

export default MyLayout;
