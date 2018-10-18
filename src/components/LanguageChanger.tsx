import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './LanguageChanger.module.scss';

import { ILanguageChanger } from '../interfaces';

const LanguageChanger: React.SFC<ILanguageChanger> = ({ langs }) => {
    const generateListWithLanguagesLinks: object = langs.map((language) => (
        <Link className={styles.a} to={language.link} key={language.langKey}>
            {language.langKey}
        </Link>
    ));

    return <React.Fragment>{generateListWithLanguagesLinks}</React.Fragment>;
};

export default LanguageChanger;
