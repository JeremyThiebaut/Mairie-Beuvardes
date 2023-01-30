import BackToTopButton from "../BackToTopButton";
import Footer from "../Footer";
import Header from "../Header";
// import Navbar from "../Navbar";


interface MyLayoutProps {
  children: React.ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      {children}
      {/* <BackToTopButton /> */}
      <Footer />
    </>
  );
};

export default MyLayout;