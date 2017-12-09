import React from "react";

const gerbarij = () => (
  <section className="lyrics">
    <article className="lyrics__text">
      <header id="gerbarij" className="lyrics__title lyrics_margin-top-big">
        ГЕРБАРИЙ
      </header>
      <section className="lyrics__stanza lyrics_italic lyrics_margin-top">
        <span dangerouslySetInnerHTML={{ __html: "[э&#769;&#160;л&#146;ь]" }} />
      </section>
      <section className="lyrics__stanza lyrics_margin-top">
        Мы с тобой в холодных подземельях<br />
        целовались в сахарный огонь!<br />
        Вынесли нас хрупкие олени<br />
        на рогах, похожих на ладонь.
      </section>
      <section className="lyrics__stanza lyrics_margin-top">
        Речка с разветвлёнными хвостами<br />
        задевала путников, шипя.<br />
        Рыбы в ней тонувшими свистками<br />
        пропускали время сквозь себя.
      </section>
      <section className="lyrics__stanza lyrics_margin-top">
        Лез на лес зелёной тканью парус,<br />
        мышцами деревья напряглись —<br />
        и сползла трухою рыхлой старость,<br />
        оголяя меж стволами жизнь!
      </section>
      <section className="lyrics__stanza lyrics_margin-top">
        Так сложились кости леса в судно.<br />
        Где-то тут в оленях и рогах<br />
        мы с тобой вросли в тугие судьбы<br />
        тропами на выжженных руках.
      </section>
      <section className="lyrics__stanza lyrics_margin-top">
        Мы плывём по Солнцу,<br />
        наш корабль чует запах гари.<br />
        Там, где мы проснёмся,<br />
        там и расцветёт гербарий.
      </section>
    </article>
  </section>
);

export default gerbarij;
