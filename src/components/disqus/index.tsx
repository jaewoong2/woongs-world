import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';

type CommenTemplateProps = {
    page_url: string;
    identifier: string;
    page_title: string;
};

const CommentTemplate: React.VFC<CommenTemplateProps> = ({ page_url, identifier, page_title }) => {
    return (
        /* Page contents */
        <Disqus
            config={{
                /* Replace PAGE_URL with your post's canonical URL variable */
                url: page_url,
                /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
                identifier: identifier,
                /* Replace PAGE_TITLE with the title of the page */
                title: page_title,
            }}
        />
    );
};

export default CommentTemplate;
