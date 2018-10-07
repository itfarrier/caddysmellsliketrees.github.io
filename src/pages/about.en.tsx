import * as React from 'react';

import Head from '../components/Head';

import * as styles from './about.module.scss';

import pdfIcon from '../assets/vectors/pdf.svg';

import { IAbout } from '../interfaces';

const AboutEn: React.SFC<IAbout> = ({
    data: {
        allFile: { edges },
    },
    i18nMessages,
    i18nMessages: {
        pageNames: { about },
    },
    langKey,
}) => {
    const linkToRider: string = edges[0].node.publicURL;

    return (
        <React.Fragment>
            <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={about} />
            <article className={styles.article}>
                <section className={styles.section}>
                    <h1 className={styles.h1}>This band&thinsp;&mdash;&thinsp;our wooden frame</h1>
                    <p className={styles.p}>
                        In&nbsp;February 2015, our grains fell into unknown land, and
                        by&nbsp;October the first sprouts appeared. Fruits we&nbsp;bloom slowly, but
                        our branches grow stronger and are filled with juice ever thicker and
                        spicier!
                    </p>
                    <p className={styles.p}>
                        We&nbsp;play soul&#8208;helpful songs for every day. They are merging
                        in&nbsp;our forests in&nbsp;such a&nbsp;way that it&nbsp;is&nbsp;difficult
                        to&nbsp;separate them from each other, and between them bellow bold deer
                        poems.
                    </p>
                </section>
                <section className={styles.section}>
                    <h1 className={styles.h1}>Members:</h1>
                    <ul className={styles.ul}>
                        <li>
                            Andrej Shvetsov
                            <br />
                            (drums, wavedrum, percussion)
                        </li>
                        <li>
                            Vadim Kolevatov
                            <br />
                            (drums)
                        </li>
                        <li>
                            Vladislav Lutsyk
                            <br />
                            (accordion, wind, vocal, background vocal)
                        </li>
                        <li>
                            Dmitrij Vavilov
                            <br />
                            (ukulele, percussion, declamation of lyrics)
                        </li>
                        <li>
                            Svetlana Podabed
                            <br />
                            (wind, guitar, vocal, background vocal, declamation of lyrics,
                            percussion)
                        </li>
                        <li>
                            Sergej Nefed'ev
                            <br />
                            (guitar, vocal, background vocal, percussion)
                        </li>
                        <li>
                            Sergej Cvetkov
                            <br />
                            (bass, declamation of lyrics)
                        </li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h1 className={styles.h1}>
                        <a className={styles.a} href={linkToRider}>
                            <span className={styles.span}>Technical rider</span>
                            <img alt="PDF logo" className={styles.pdfImg} src={pdfIcon} />
                        </a>
                    </h1>
                </section>
            </article>
        </React.Fragment>
    );
};

export const AboutEnQuery = graphql`
    query AboutEnQuery {
        allFile(filter: { relativePath: { regex: "/documents/" } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`;

export default AboutEn;
