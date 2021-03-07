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
        <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
            <meta property="fb:app_id" content="자신의 app id" />
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
export default ReactHelmet;
