import * as React from 'react';
import Countdown from 'react-countdown-now';

import * as styles from './index.module.scss';

import { IIndex } from '../interfaces';

const IndexEn: React.SFC<IIndex> = ({
    data: {
        site: {
            siteMetadata: { dateOfEvent },
        },
    },
}) => (
    <article className={styles.article}>
        <div className={styles.untilShow}>Until the next show of Caddy:</div>
        <Countdown
            date={dateOfEvent}
            renderer={({ days, hours, minutes }) => (
                <div className={styles.countdown}>
                    <div className={styles.block}>
                        <span className={styles.data}>{days}</span>
                        <span className={styles.title}>{days > 1 ? 'days' : 'day'}</span>
                    </div>
                    <div className={styles.block}>
                        <span className={styles.data}>{hours}</span>
                        <span className={styles.title}>{hours > 1 ? 'hours' : 'hour'}</span>
                    </div>
                    <div className={styles.block}>
                        <span className={styles.data}>{minutes}</span>
                        <span className={styles.title}>{minutes > 1 ? 'minutes' : 'minute'}</span>
                    </div>
                </div>
            )}
        />
        <svg
            className={styles.svg}
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 100 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={styles.wave1}
                d="m-100 17.511s29.006-2.6495 75-0.6876c60.25 2.5701 81.25 11.545 150.25 11.912 55.721 0.2965 74.75-5.6414 74.75-5.6414v6.906h-300v-12.489z"
                style={{ fill: '#565656' }}
            />
            <path
                className={styles.wave2}
                d="m200 1.041s-61.625-4.5064-99.75 5.2333-70.594 15.391-124.5 16.311c-55.25 0.9437-75.75-8.8513-75.75-8.8513v16.266h300v-28.959z"
                style={{ fill: '#565656', fillOpacity: 0.6 }}
            />
            <path
                className={styles.wave3}
                d="m200 16.232s-24.625-5.6378-84.5-3.7495c-59.875 1.8882-74.962 15.943-144 16.562-50.75 0.455-71.5-3.7697-71.5-3.7697v4.7252h300v-13.768z"
                style={{ fill: '#565656', fillOpacity: 0.6 }}
            />
        </svg>
    </article>
);

export const IndexEnQuery = graphql`
    query IndexEnQuery {
        site {
            siteMetadata {
                dateOfEvent
            }
        }
    }
`;

export default IndexEn;
