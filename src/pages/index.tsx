import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';
import * as React from 'react';

import { IIndex } from '../interfaces';

class Index extends React.PureComponent<IIndex, {}> {
    constructor(props: IIndex, context: any) {
        super(props, context);

        if (typeof window !== 'undefined') {
            const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
            const langKey = getUserLangKey(langs, defaultLangKey);
            const homeUrl = withPrefix(`/${langKey}/`);

            window.___history.replace(homeUrl);
        }
    }

    public render() {
        return <div />;
    }
}

export const IndexQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
    }
`;

export default Index;
