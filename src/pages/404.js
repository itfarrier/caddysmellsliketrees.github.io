import React from "react";

import Footer from "../components/Footer";
import styles from "./404.module.css";

const NotFoundPage = () => (
  <div>
    <div className={"container " + styles.center}>
      <h1>404</h1>
      <p>Эта ветка высохла.</p>
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
