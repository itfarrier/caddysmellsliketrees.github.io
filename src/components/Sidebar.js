import { slide as Menu } from "react-burger-menu";
import isMobile from "ismobilejs";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import styles from "./Sidebar.module.scss";

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isOpen: false };
    this.isOpen = this.isOpen.bind(this);
  }
  isOpen = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <Menu
        burgerBarClassName={styles.burger}
        burgerButtonClassName={isMobile.any ? styles.button : styles.button2}
        customBurgerIcon={<img src="/vectors/bars.svg" />}
        isOpen={this.state.isOpen}
        itemListClassName={styles.list}
        menuClassName={styles.menu}
        overlayClassName={styles.overlay}
        width={this.props.width}
      >
        <div className={styles.links}>
          <Link onClick={this.isOpen} to="/">
            ГЛАВНАЯ
          </Link>
          <Link onClick={this.isOpen} to="/lyrics">
            ТЕКСТЫ
          </Link>
          <Link onClick={this.isOpen} to="/about">
            О ГРУППЕ
          </Link>
        </div>
        <address>
          <a
            href="https://vk.com/caddysmelledliketrees"
            title="https://vk.com/caddysmelledliketrees"
          >
            <img src="/vectors/vk.svg" />
          </a>
          <a
            href="https://youtube.com/channel/UCDUU-xPtMQ2VOpYaMv-OvLw"
            title="https://youtube.com/channel/UCDUU-xPtMQ2VOpYaMv-OvLw"
          >
            <img src="/vectors/youtube.svg" />
          </a>
          <a
            href="https://instagram.com/caddysmellslike"
            title="https://instagram.com/caddysmellslike"
          >
            <img src="/vectors/instagram.svg" />
          </a>
          <a
            href="http://last.fm/ru/music/%D0%9A%D1%8D%D0%B4%D0%B4%D0%B8+%D0%BF%D0%B0%D1%85%D0%BD%D0%B5%D1%82+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F%D0%BC%D0%B8"
            title="http://last.fm/ru/music/%D0%9A%D1%8D%D0%B4%D0%B4%D0%B8+%D0%BF%D0%B0%D1%85%D0%BD%D0%B5%D1%82+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F%D0%BC%D0%B8"
          >
            <img src="/vectors/lastfm.svg" />
          </a>
          <a
            href="https://soundcloud.com/caddysmelledliketrees"
            title="https://soundcloud.com/caddysmelledliketrees"
          >
            <img src="/vectors/soundcloud.svg" />
          </a>
          <a
            href="https://caddysmelledliketrees.bandcamp.com"
            title="https://caddysmelledliketrees.bandcamp.com"
          >
            <img src="/vectors/bandcamp.svg" />
          </a>
          <a href="mailto:info@caddysmellsliketrees.ru?subject=Общие%20вопросы">
            <img src="/vectors/envelope.svg" />
          </a>
        </address>
      </Menu>
    );
  }
}

Sidebar.propTypes = {
  width: PropTypes.string.isRequired
};

export default Sidebar;
