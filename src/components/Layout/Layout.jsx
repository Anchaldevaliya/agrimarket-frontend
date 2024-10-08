import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

//importin react-hot-toast to show notification
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        {/* // Helmet is used to set meta tags for SEO purpose  */}
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh", marginTop: "-25px" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Default props for Layout component to avoid error
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project for ecommerce app",
  keywords: "mern,react,node,mongodb express ecommerce app ",
  author: "Anchal Devaliya",
};

export default Layout;
