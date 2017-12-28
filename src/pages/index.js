import React from "react";

const Index = () => (
  <div className="logo-centering">
    <div className="full-logo">
      <div className="img-logo img-logo_margin-right">
        <img alt="Дерево" className="img-logo__tree" src="/vectors/tree.svg" />
        <div
          title="Луч"
          className="img-logo__line img-logo__line_dot-reverse"
        />
      </div>
      <div className="text-logo">
        <img
          alt="Кэдди пахнет деревьями"
          className="img-logo__tree"
          src="/vectors/textLogo.svg"
        />
      </div>
      <div className="img-logo img-logo_margin-left">
        <img
          alt="Дерево"
          className="img-logo__tree img-logo__tree_hidden"
          src="/vectors/tree.svg"
        />
        <div title="Луч" className="img-logo__line" />
      </div>
    </div>
  </div>
);

export default Index;
