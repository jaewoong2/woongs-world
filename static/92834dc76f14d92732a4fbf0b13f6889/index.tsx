import { Link } from 'gatsby';
import React, { VFC } from 'react';
import { HeaderNav, HeadTitle } from './styles';

interface IHeaderProps {
    headers: string[];
}

const HeadNav: VFC<IHeaderProps> = ({ headers }) => {
    return (
        <HeaderNav>
            {headers.map((head, idx) => (
                <Link activeClassName="active" key={head + `${idx}`} to={'/' + head + '/'}>
                    <HeadTitle>{head[0].toLocaleUpperCase() + head.slice(1, head.length)}</HeadTitle>
                </Link>
            ))}
        </HeaderNav>
    );
};

export default HeadNav;
