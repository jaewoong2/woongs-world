import { Link } from 'gatsby';
import React from 'react';
import { Container, Tag } from './styles';
import { OutboundLink } from 'gatsby-plugin-gtag';

type ListsProps = {
    title: string;
    date: string;
    slug: string;
    tags?: string[];
};

const Lists: React.VFC<ListsProps> = ({ title, slug, date, tags }) => {
    return (
        <Container>
            <div className="list-wrapper">
                <OutboundLink className="link-posts" href={slug}>
                    {/* <Link className="link-posts" to={slug}> */}
                    <h3 className="post-title text">{`${title}`}</h3>
                    {/* </Link> */}
                </OutboundLink>
                <h4 className="post-date text">: {date}</h4>
                <div>
                    {tags?.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Lists;
