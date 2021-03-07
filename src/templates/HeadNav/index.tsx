import { Link } from 'gatsby';
import React, { VFC } from 'react';
import { HeaderNav, HeadTitle, ToggleButton } from './styles';

interface IHeaderProps {
    headers: string[];
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const HeadNav: VFC<IHeaderProps> = ({ headers, isDarkMode, setIsDarkMode }) => {
    return (
        <HeaderNav>
            <Link to="/home">
                <HeadTitle>HOME</HeadTitle>
            </Link>
            <div className="link-wrapper">
                {headers.map((head, idx) => (
                    <Link activeClassName="active" key={head + `${idx}`} to={'/' + head + '/'}>
                        <HeadTitle>{head[0].toLocaleUpperCase() + head.slice(1, head.length)}</HeadTitle>
                    </Link>
                ))}
                <div className="button-wrapper">
                    {<ToggleButton onClick={() => setIsDarkMode(!isDarkMode)} className={isDarkMode ? 'dark' : ''} />}
                </div>
            </div>
        </HeaderNav>
    );
};

export default HeadNav;
