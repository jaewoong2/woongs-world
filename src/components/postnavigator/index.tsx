import { Link } from 'gatsby';
import React from 'react';
import { LinkRightWrapper, LinkLeftWrapper } from './styles';

interface IpostNavigatorProps {
    slug: string | boolean;
    left: boolean;
    right: boolean;
    title: boolean | string;
}

const PostNavigator: React.VFC<IpostNavigatorProps> = ({ title = '', slug = '', left }) => {
    if (left) {
        return slug ? (
            <LinkLeftWrapper>
                <Link className="link-title" to={slug && slug !== true ? slug : '/'}>
                    {title && title != true ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : ''}
                </Link>
            </LinkLeftWrapper>
        ) : (
            <LinkLeftWrapper>
                <a className="link-title ban">NULL</a>
            </LinkLeftWrapper>
        );
    }

    return slug ? (
        <LinkRightWrapper>
            <Link className="link-title" to={slug && slug !== true ? slug : '/'}>
                {title && title != true ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : ''}
            </Link>
        </LinkRightWrapper>
    ) : (
        <LinkRightWrapper>
            <a className="link-title ban">NULL</a>
        </LinkRightWrapper>
    );
};

export default PostNavigator;
