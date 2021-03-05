import { Link } from 'gatsby';
import React from 'react';
import { Container, Tag } from './styles';

type ListsProps = {
    title: string;
    date: string;
    slug: string;
    tags: string[];
    idx: number;
};

const Lists: React.VFC<ListsProps> = ({ idx, title, slug, date, tags }) => {
    return (
        <Container>
            <div className="list-wrapper">
                <Link className="link-posts" to={slug}>
                    <h3 className="post-title text">
                        <span className="index">{idx + '.'}</span>
                        {title}
                    </h3>
                </Link>
                <h4 className="post-date text">: {date}</h4>
                <div>
                    {tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Lists;
