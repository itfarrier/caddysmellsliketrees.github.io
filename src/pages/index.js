import React from "react";

const Index = () => (
  <div className="logo-centering">
    <div className="full-logo">
      <div className="img-logo img-logo_margin-right">
        <img alt="tree" className="img-logo__tree" src="/vectors/tree.svg" />
        <div
          title="ЛУЧ"
          className="img-logo__line img-logo__line_dot-reverse"
        />
      </div>
      <div className="text-logo">
        <div className="text-logo__caddy">КЭДДИ</div>
        <div className="text-logo__smells">ПАХНЕТ</div>
        <div className="text-logo__like_trees">ДЕРЕВЬЯМИ</div>
      </div>
      <div className="img-logo img-logo_margin-left">
        <img
          alt="tree"
          className="img-logo__tree img-logo__tree_hidden"
          src="/vectors/tree.svg"
        />
        <div title="ЛУЧ" className="img-logo__line" />
      </div>
    </div>
  </div>
);

export default Index;
