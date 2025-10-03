import { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const btnRef = useRef(null);

  // function for a button to go back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // function to detect scroll and show BackToTop button
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        btnRef.current.style.display = "block";
      } else {
        btnRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main
        className="dark:bg-gray900"
        style={{
          minHeight: "80vh",
        }}
      >
        <Toaster />
        {children}
        <button
          onClick={scrollToTop}
          ref={btnRef}
          type="button"
          className="fixed right-4 bottom-4 hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 animate-bounce"
        >
          ^
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
