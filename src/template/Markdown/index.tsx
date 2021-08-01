import Tag from 'components/Atom/Tag';
import PostNavigator from 'components/Organism/PostNavigator';
import { CreatePagesArgs, graphql, Link } from 'gatsby';
import React from 'react';
import Layout from 'template/Layout';
import { MarkDownProps } from 'type';
import {
  CommentWrppaer,
  H1,
  MarkDownWrapper,
  PostNavWrppaer,
  Title,
  Wrapper,
} from './MarkDown.styles';

const MarkDown: React.FC<MarkDownProps & CreatePagesArgs> = ({
  pageContext,
  data,
}) => {
  const post = data.markdownRemark;
  const { next, previous, nextTitle, previousTitle } = pageContext;
  return (
    <Layout>
      <Wrapper>
        <Title>
          <H1>{post?.frontmatter.title}</H1>
          {post?.frontmatter?.tags?.map(tag => (
            <Link key={tag} to={`/tags?tag=${tag}`}>
              <Tag>{tag}</Tag>
            </Link>
          ))}
        </Title>
        <MarkDownWrapper
          dangerouslySetInnerHTML={{ __html: post?.html ? post?.html : '' }}
        />
      </Wrapper>
      <PostNavWrppaer>
        <PostNavigator title={previousTitle} slug={previous} left={true} />
        <PostNavigator title={nextTitle} slug={next} left={false} />
      </PostNavWrppaer>
      <CommentWrppaer>
        {/* <Utterances
          repo={'jaewoong2/blog-comment'}
          theme={styledTheme?.isDarkMode ? 'github-dark' : 'github-light'}
        /> */}
      </CommentWrppaer>
    </Layout>
  );
};

export default MarkDown;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
