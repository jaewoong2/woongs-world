import Tag from 'components/Atom/Tag';
import { Link } from 'gatsby';
import React from 'react';
import { Container } from './Lists.styles';

interface ListsProps {
  title: string;
  date: string;
  slug: string;
  tags?: string[];
}

const Lists: React.VFC<ListsProps> = ({ title, slug, date, tags }) => {
  return (
    <Container>
      <div className="list-wrapper">
        <Link className="link-posts" to={slug}>
          <h3 className="post-title">{`${title}`}</h3>
        </Link>
        <h4 className="post-date">: {date}</h4>
        <div className="tag-wrapper">
          {tags?.map(tag => (
            <Link key={tag} className="link-posts" to={`/tags?tag=${tag}`}>
              <Tag>{tag}</Tag>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Lists);
