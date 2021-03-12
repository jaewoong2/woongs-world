import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
    repo: string;
    theme: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
        const initialSetting = () => {
            const utterances = document?.createElement('script');

            const attributes = {
                src,
                repo,
                theme,
                'issue-term': 'pathname',
                label: 'comments',
                crossOrigin: 'anonymous',
                async: 'true',
            };

            Object.entries(attributes).forEach(([key, value]) => {
                utterances.setAttribute(key, value);
            });

            containerRef?.current?.appendChild(utterances);
        };

        const postThemeMessage = () => {
            const message = {
                type: 'set-theme',
                theme,
            };
            utterancesEl?.contentWindow?.postMessage(message, src);
        };

        const utterancesEl: HTMLIFrameElement | null | undefined = containerRef?.current?.querySelector(
            'iframe.utterances-frame',
        );
        utterancesEl ? postThemeMessage() : initialSetting();
    }, [repo, theme]);

    return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default React.memo(Utterances);
