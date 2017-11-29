import { slide as Menu } from "react-burger-menu";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

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
        customBurgerIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
            <path
              d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
              fill="#0a0a0a"
            />
          </svg>
        }
        isOpen={this.state.isOpen}
        width={this.props.width}
      >
        <Link onClick={this.isOpen} title="ГЛАВНАЯ" to="/">
          ГЛАВНАЯ
        </Link>
        <Link onClick={this.isOpen} title="ТЕКСТЫ" to="/lyrics">
          ТЕКСТЫ
        </Link>
        <Link onClick={this.isOpen} title="О ГРУППЕ" to="/about">
          О ГРУППЕ
        </Link>
        <address>
          <a
            href="https://vk.com/caddysmelledliketrees"
            title="https://vk.com/caddysmelledliketrees"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1792">
              <path
                d="M1981 520q23 64-150 294-24 32-65 85-40 51-55 72t-30.5 49.5-12 42 13 34.5 32.5 43 57 53q4 2 5 4 141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66T552 1338l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211T69 559q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T718 964t34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 16-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39T1221 971q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com/channel/UCDUU-xPtMQ2VOpYaMv-OvLw"
            title="https://youtube.com/channel/UCDUU-xPtMQ2VOpYaMv-OvLw"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
              <path
                d="M1099 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zm338 1v46h-90v-46q0-68 45-68t45 68zm-966-218h107v-94H266v94h105v569h100v-569zm288 569h89v-494h-89v378q-30 42-57 42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0 102-61v54zm429-148v-197q0-73-9-99-17-56-71-56-50 0-93 54V933h-89v663h89v-48q45 55 93 55 54 0 71-55 9-27 9-100zm338-10v-13h-91q0 51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0 79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zM918 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70zm719 751q0 234-26 350-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350 14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM639 0h102L620 399v271H520V399q-14-74-61-212Q422 84 394 0h106l71 263zm370 333v175q0 81-28 118-38 51-106 51-67 0-105-51-28-38-28-118V333q0-80 28-117 38-51 105-51 68 0 106 51 28 37 28 117zm335-162v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75V171h91v367q0 33 1 35 3 22 21 22 27 0 57-43V171h91z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/caddysmellslike"
            title="https://instagram.com/caddysmellslike"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
              <path
                d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a
            href="http://last.fm/ru/music/%D0%9A%D1%8D%D0%B4%D0%B4%D0%B8+%D0%BF%D0%B0%D1%85%D0%BD%D0%B5%D1%82+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F%D0%BC%D0%B8"
            title="http://last.fm/ru/music/%D0%9A%D1%8D%D0%B4%D0%B4%D0%B8+%D0%BF%D0%B0%D1%85%D0%BD%D0%B5%D1%82+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F%D0%BC%D0%B8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
              <path
                d="M1292 704q0 6 10 41 10 29 25 49.5t41 34 44 20 55 16.5q325 91 325 332 0 146-105.5 242.5T1432 1536q-59 0-111.5-18.5T1229 1472t-77-74.5-63-87.5-53.5-103.5-43.5-103T952.5 997 917 902q-32-81-61.5-133.5T782 672t-104-64-142-20q-96 0-183 55.5T215 788t-51 185q0 160 106.5 279.5T534 1372q177 0 258-95 56-63 83-116l84 152q-15 34-44 70l1 1q-131 152-388 152-147 0-269.5-79T68 1249.5 0 975q0-105 43.5-206t116-176.5 172-121.5T536 425q87 0 159 19t123.5 50 95 80 72.5 99 58.5 117 50.5 124.5 50 130.5 55 127q96 200 233 200 81 0 138.5-48.5T1629 1195q0-42-19-72t-50.5-46-72.5-31.5-84.5-27-87.5-34-81-52-65-82-39-122.5q-3-16-3-33 0-110 87.5-192t198.5-78q78 3 120.5 14.5T1624 493h-1q12 11 23 24.5t26 36 19 27.5l-129 99q-26-49-54-70v-1q-23-21-97-21-49 0-84 33t-35 83z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a
            href="https://soundcloud.com/caddysmelledliketrees"
            title="https://soundcloud.com/caddysmelledliketrees"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1792">
              <path
                d="M784 1372l16-241-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523 14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23zm296-29l11-211-12-586q0-16-13-24-8-5-16-5t-16 5q-13 8-13 24l-1 6-10 579q0 1 11 236v1q0 10 6 17 9 11 23 11 11 0 20-9 9-7 9-20zM35 1003l20 128-20 126q-2 9-9 9t-9-9L0 1131l17-128q2-9 9-9t9 9zm86-79l26 207-26 203q-2 9-10 9-9 0-9-10l-23-202 23-207q0-9 9-9 8 0 10 9zm280 453zM213 886l25 245-25 237q0 11-11 11-10 0-12-11l-21-237 21-245q2-12 12-12 11 0 11 12zm94-7l23 252-23 244q-2 13-14 13-13 0-13-13l-21-244 21-252q0-13 13-13 12 0 14 13zm94 18l21 234-21 246q-2 16-16 16-6 0-10.5-4.5T370 1377l-20-246 20-234q0-6 4.5-10.5T385 882q14 0 16 15zm383 475zM495 751l21 380-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246 18-380q2-18 18-18 7 0 12 5.5t5 12.5zm94-86l19 468-19 244q0 8-5.5 13.5T570 1396q-18 0-20-19l-16-244 16-468q2-19 20-19 8 0 13.5 5.5T589 665zm98-40l18 506-18 242q-2 21-22 21-19 0-21-21l-16-242 16-506q0-9 6.5-15.5T665 603q9 0 15 6.5t7 15.5zm392 742zM881 621l15 510-15 239q0 10-7.5 17.5T856 1395t-17-7-8-18l-14-239 14-510q0-11 7.5-18t17.5-7 17.5 7 7.5 18zm99 19l14 492-14 236q0 11-8 19t-19 8-19-8-9-19l-12-236 12-492q1-12 9-20t19-8 18.5 8 8.5 20zm212 492l-14 231q0 13-9 22t-22 9-22-9-10-22l-6-114-6-117 12-636v-3q2-15 12-24 9-7 20-7 8 0 15 5 14 8 16 26zm1112-19q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22V463q0-23 28-33 85-34 181-34 195 0 338 131.5T1911 851q53-22 110-22 117 0 200 83t83 201z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a
            href="https://caddysmelledliketrees.bandcamp.com"
            title="https://caddysmelledliketrees.bandcamp.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
              <path
                d="M1070 1178l306-564H722l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286T0 896t71-348 191-286T548 71 896 0t348 71 286 191 191 286 71 348z"
                fill="#f0f0f0"
              />
            </svg>
          </a>
          <a href="mailto:info@caddysmellsliketrees.ru?subject=Общие%20вопросы">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
              <path
                d="M1792 710v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V710q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38T639 1015q-91-64-262-182.5T172 690q-62-42-117-115.5T0 438q0-78 41.5-130T160 256h1472q65 0 112.5 47t47.5 113z"
                fill="#f0f0f0"
              />
            </svg>
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
