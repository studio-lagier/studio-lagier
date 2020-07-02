import React from "react";
import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

/**
 * Page wrapper component, providing header, navigation,
 * and footer.
 */
export default function Page({ children }) {
  return (
    <div className="overflow-x-hidden relative">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
}
