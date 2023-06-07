import React from "react";

import { Footer, Container, Header, Breadcrumb } from "../index.js";

export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>

      <Container>{children}</Container>

      <Footer />
    </>
  );
};
