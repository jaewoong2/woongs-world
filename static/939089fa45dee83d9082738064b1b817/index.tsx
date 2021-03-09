import React from 'react';
import HeadNav from '../HeadNav';

const MainComponent: React.FC = ({ children }) => {
    return (
        <main>
            <HeadNav headers={['tsl', 'about', 'dev', 'algorithm']} />
            <section></section>
            <section>{children}</section>
        </main>
    );
};

export default MainComponent;
