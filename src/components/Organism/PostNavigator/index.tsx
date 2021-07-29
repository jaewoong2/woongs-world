import React from 'react';
import { Link } from 'gatsby';
import {
  LinkRightWrapper,
  LinkLeftWrapper,
  PlaceHolder,
  Null,
} from './PostNavigator.styles';

interface PostNavigatorProps {
  slug: string;
  left: boolean;
  title: string;
}

const PostNavigator: React.VFC<PostNavigatorProps> = ({
  slug,
  left,
  title,
}) => {
  if (left) {
    return slug ? (
      <LinkLeftWrapper>
        <PlaceHolder className="text placeholder">{'Previous'}</PlaceHolder>
        <Link className="link-title" to={slug}>
          {title
            ? title.length > 20
              ? title.slice(0, 20) + '...'
              : title
            : ''}
        </Link>
      </LinkLeftWrapper>
    ) : (
      <LinkLeftWrapper>
        <PlaceHolder className="text placeholder">{'Previous'}</PlaceHolder>
        <Null className="link-title ban">NULL</Null>
      </LinkLeftWrapper>
    );
  }

  return slug ? (
    <LinkRightWrapper>
      <PlaceHolder className="text placeholder">{'Next'}</PlaceHolder>
      <Link className="link-title" to={slug}>
        {title ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : ''}
      </Link>
    </LinkRightWrapper>
  ) : (
    <LinkRightWrapper>
      <PlaceHolder className="text placeholder">{'Next'}</PlaceHolder>
      <Null className="link-title ban">NULL</Null>
    </LinkRightWrapper>
  );
};

export default PostNavigator;
