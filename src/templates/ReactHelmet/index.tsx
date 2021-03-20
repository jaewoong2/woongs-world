import React from 'react';
import { Helmet } from 'react-helmet';

interface IhelmetProps {
    keywords: string;
    description: string;
    title: string;
    favicon: string;
}

const ReactHelmet: React.VFC<IhelmetProps> = ({ keywords, description, title, favicon }) => {
    return (
        <Helmet
            htmlAttributes={{
                lang: 'ko',
            }}
        >
            <meta charSet="utf-8" />
            <meta name="google-site-verification" content="toSOo-FxzShs4tTRSaaGs2yaEl_QsbH-GUN2zp-6TC0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
            <link rel="icon" type="image/png" href={favicon} sizes={'16x16'} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={favicon} />
            <meta property="og:site_name" content="sublog" />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="400" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={favicon} />
            <meta name="twitter:card" content="summary" />
        </Helmet>
    );
};
export default React.memo(ReactHelmet);
