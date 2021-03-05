import { PageProps } from 'gatsby';
export interface ImdProps extends PageProps {
    data: ImdData['data'];
}

export interface ImdData {
    data: {
        allMarkdownRemark: {
            totalCount: number | string;
            edges: [
                {
                    node: nodeTypes;
                },
            ];
        };
    };
}

type nodeTypes = {
    id: string;
    frontmatter: {
        title: string;
        date: string;
        tags: string[];
    };
    fields: {
        slug: string;
    };
    excerpt: string;
};
