---
title: "[Gatsby JS - Typescript] StyledComponent 로 Dark Theme 구현"
date: "2021-03-13"
folder: "dev"
tags: ["gatsbyjs", "styled-componenet", "typescript"]
---
Gatsby JS를 간단히 말하자면 정적페이지이다.

그래서 동적으로 Javascript 코드로 CSS를 바꾸는 방법은 정적페이지인 Gatsby JS에는 CRA로 만드는 웹페이지와 다르게 해줘야한다.


### Styled Theme Provider 

Styled Component에서 제공하는 Theme(직접 커스텀) 을 Styled를 사용하는 모든 컴포넌트 Element가 쓸 수 있도록 해주는 Provider이다.

- ####  1. styled.d.ts 파일 작성
 타입스크립트에서 직접 커스텀한 Theme의 Type들을 사용하기 위한 `.d.ts 파일`
 
```ts
import 'styled-components';
import { colorTypes } from './types'
// colorTypes 는 본인이 커스텀

declare module 'styled-components' {
    export interface DefaultTheme {
        isDarkMode: boolean;
        color: colorTypes;
    }
}
```

- #### 2. ThemeProvider 생성
StyledComponent는 ThemeProvider를 제공해주는데, 
이를 최상위 컴포넌트위에 감싸주면 Styled 를 사용하는 컴포넌트들을 이용할 때, 내가 원하는 {theme} Object 를 사용할 수있다.

 `Theme Provider` 는 작성하는 사람마다 다른 방법이 있는 걸로 아는데 일단.. 나는 ThemeProvider로 {children} 을 감싸는 컴포넌트를 만든다.
 
 그리고, 거기에서 themeing을 하고 싶은 속성들을 적용 해준다.
 
 나의경우, dark모드에 따라서 자주 쓸 색상을 정해두고 그 색상으로 나눠준 다음, 작은 단위의 컴포넌트들을 만들어가면서 속성들을 추가하는 식으로 해준다.
  

```tsx
`` StyledThemeProvider.tsx

import React, { useContext, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import DarkThemeContext from '../provider';

const StyledThemeProvider: React.FC = ({ children }) => {
    const { isDarkMode } = useContext(DarkThemeContext);
    const color = {
        white: 'rgb(250, 250, 250)',
        black: 'rgb(30, 31, 33, 0.94)',
        yellow: 'rgb(253, 216, 4)',
        purple: 'rgba(107, 82, 248, 1)',
        whiteDarker: 'rgba(233, 233, 233, 0.96)',
    };

    const theme: DefaultTheme = useMemo(
        () => ({
            isDarkMode: isDarkMode,
            color: {
                ...color,
                linkColor: isDarkMode ? 'rgba(54, 54, 54, 0.93)' : color.whiteDarker,
                tagColor: isDarkMode ? 'rgba(202, 214, 240, 0.78)' : 'rgba(13, 34, 80, 0.52)',
                hoverColor: isDarkMode ? 'rgba(200, 200, 200, 0.79)' : 'rgba(40, 40, 40, 0.55)',
                primary: isDarkMode ? color.black : color.white,
                dark: isDarkMode ? color.white : color.black,
                icon: isDarkMode ? color.yellow : color.black,
                border: isDarkMode ? 'rgb(53, 54, 56)' : 'rgb(228, 231, 232)',
                boxShadow: isDarkMode ? ' rgba(0, 1, 3, 0.07)' : 'rgba(240, 240, 240, 0.04)',
                hoverBackground: isDarkMode ? 'rgba(51, 52, 54, 0.918)' : 'rgba(228, 231, 232, 0.6)',
            },
        }),
        [isDarkMode],
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
```



### Context API

내가 만들 Gatsby Blog는, 백엔드 및 데이터 서버와 통신할 일이 없는 정적 페이지이다.

근데, themeing을 위해서 Redux나 Recoil 같은 전역 상태 관리 라이브러리를 사용하는 것은 사치라고 생각하고,

1. `darkmode의 상태` 즉, `boolean 값`과
2. `darkmode의 상태` 를 바꿔주는 `handler 함수`

이 2가지만 을 전역으로 할 것이기 때문에 `Context API`를 사용하였다.

전역상태 관리를 사용하는 이유는, `useState()` 만을 사용해서 상태관리를 하면, `Styled Theme Provider` 에서 상태를 생성해주고, `Hanlder 함수`는 하위 컴포넌트들에게 props로 넘겨줘야 하는데, 이를 위해서 컴포넌트를 작성하면, `{children}` 및 `Gatsby-ssr.js 의 {Elemenet}` 를 사용하기 불편하다.

그래서, `DarkMode의 상태` 를 ThemeProvider 보다 먼저 생성하고, Handler는 원하는 곳에서 용이하게 사용하기 위해서 `Context API` 를 사용하였다.


1. Context API Context 생성

```tsx
import { createContext } from 'react';

interface ThemeContextTypes {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const initialState: ThemeContextTypes = {
    isDarkMode: false,
    setIsDarkMode: () => true,
};

const DarkThemeContext = createContext<ThemeContextTypes>(initialState);

export default DarkThemeContext;

```

2. ThemeContext를 전달(value값에 원하는 상태와 함수등을)하는 Provider 생성

```tsx
import React, { useCallback, useState } from 'react';
import { getInitialProps, setThemeProps } from '../repo/app';
import DarkThemeContext from './index';

const ContextAPIProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialProps());

    const setIsDarkModeHandler = useCallback(
        (value: boolean) => {
            setIsDarkMode(value);
            setThemeProps(value);
        },
        [setThemeProps],
    );

    return (
        <DarkThemeContext.Provider
            value={{
                isDarkMode: isDarkMode,
                setIsDarkMode: setIsDarkModeHandler,
            }}
        >
            {children}
        </DarkThemeContext.Provider>
    );
};

export default ContextAPIProvider;

```
  


### Gatsby-ssr.js

Gatsby의 Element[src 에 있는 jsx] 들이 Theme를 갖고 `Dark`, `light` 에 따라 css가 바뀌려면, server side rendering 을 해줘야한다. 

즉, 전역상태 Provider, Styled Theme Provider 각각을 element들보다 상위컴포넌트로 싸주고, Server가 실행 되기전에 전역상태가 활성화(?) 되고, 설정한 Styled Theme이 Element에 도달하려면, `Gatsby-ssr.js` 를 작성해줘야한다.


`Gatsby-ssr.js` 는, `root/gatsby-ssr.js` 폴더로 작성 해준다.

```jsx
import React from 'react';
import ContextAPIProvider from './src/provider/ContextAPIProvider';
import StyledThemeProvider from './src/style/StyledThemeProvider';
import GlobalStyle from './src/style/global-theme';

export const wrapRootElement = ({ element }) => (
    <ContextAPIProvider>
        <StyledThemeProvider>
            <GlobalStyle />
            {element}
        </StyledThemeProvider>
    </ContextAPIProvider>
);
``