import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="">
        <div className="max-w-screen-md flex flex-col px-10 m-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
