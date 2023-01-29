import BackToTopButton from "../BackToTopButton";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

const MyLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default MyLayout;