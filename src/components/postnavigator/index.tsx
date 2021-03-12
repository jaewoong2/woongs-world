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
                <span className="text placeholder">{'Previous'}</span>
                <Link className="link-title" to={slug && slug !== true ? slug : '/'}>
                    {title && title != true ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : ''}
                </Link>
            </LinkLeftWrapper>
        ) : (
            <LinkLeftWrapper>
                <span className="text placeholder">{'Previous'}</span>
                <a className="link-title ban">NULL</a>
            </LinkLeftWrapper>
        );
    }

    return slug ? (
        <LinkRightWrapper>
            <span className="text placeholder">{'Next'}</span>
            <Link className="link-title" to={slug && slug !== true ? slug : '/'}>
                {title && title != true ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : ''}
            </Link>
        </LinkRightWrapper>
    ) : (
        <LinkRightWrapper>
            <span className="text placeholder">{'Next'}</span>
            <a className="link-title ban">NULL</a>
        </LinkRightWrapper>
    );
};

export default PostNavigator;
