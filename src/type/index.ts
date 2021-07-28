type Color = {
    /** representative Color*/
    primary: string;
    /** dark => dark, light => light */
    main: string;
    /** dark => light, light => dark */
    sub: string;
    border: string;
    boxShadow: string;
    hover: string;
    hoverBg: string;
    tag: string;
    link: string;
    icon: string;
}

export type defaultTheme = {
    isDarkMode: boolean;
    color: Color,
    /** original Color */
    origin: {
        color: {
            white: string;
            black: string;
            yellow: string;
            purple: string;
            lightDark: string;
            sky: string;
            navy: string;
        }
    }
}

export type MarkDownData = {
    allMarkdownRemark: AllMarkDownRemark;
}

export type AllMarkDownRemark = {
    totalCount: number | string;
    edges: { node: NodeType }[];
}

type NodeType = {
    id: string;
    frontmatter: FrontMatterType;
    fields: {
        slug: string;
    };
    excerpt: string;
};

type FrontMatterType = {
    title: string;
    date: string;
    tags?: string[];
    description?: '';
}