import { graphql, StaticQuery } from 'gatsby';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';
import * as React from 'react';

import IndexLayout from '../components/layout';

import { IIndex } from '../interfaces';

class Index extends React.PureComponent<IIndex, {}> {
    constructor(props: IIndex, context: any) {
        super(props, context);

        console.log(props);
        if (typeof window !== 'undefined') {
            const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
            const langKey = getUserLangKey(langs, defaultLangKey);
            const homeUrl = withPrefix(`/${langKey}/`);

            window.___replace(homeUrl);
        }
    }

    public render() {
        console.log(this.props);
        return (
            <IndexLayout
                history={this.props.history}
                location={this.props.location}
                match={this.props.match}
            >
                <div />
            </IndexLayout>
        );
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
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
        `}
        render={(data) => <Index data={data} {...props} />}
    />
);
