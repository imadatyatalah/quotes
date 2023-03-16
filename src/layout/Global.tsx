import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default GlobalLayout;
