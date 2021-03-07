---
title: "Custom Hooks 만들기"
date: "2021-01-07"
folder: "tsl"
tags: ["hooks", "react", "typescript"]
description: "making hooks easy",
---

```javascript
import { useState, useCallback, Dispatch, SetStateAction } from 'react';

function useInput<T>(initalValue: T)
 	: [T, Dispatch<SetStateAction<T>>, (e?: React.ChangeEvent<HTMLInputElement>) => void] {
    const [value, setValue] = useState<typeof initalValue>(initalValue);
    const changer = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return [value, setValue, changer];
}

export default useInput;
```

### Form
로그인이나 회원가입 기능을 구현할 때, `input tag` 를 많이 사용하게 될 것이다. `input tag`의 상태값을 받기위해서 `value` 값과 `onChange` 함수를 구현해주어야 하는데, `input` 이 많아 지면 `Component` 에서 작성해야 하는 함수가 많아진다. 이를 위해 만든 커스텀 훅이다.

```javascript
import useInput from '../hooks/useInput.tsx'

...
const [value, setValue, onChangeValue] = useInput<string>('');
...

return (
	<input value={value} onChange={onChangeValue} />
)


```

### Generic

커스텀 훅의 타입 파라미터는 Generic으로 설정 해준다. `Form` 태그의 값들은 보통 `string` 이지만, `number`가 올 수 있고, 또한 특정한 값만 받아오게 하기 위해서 값을 강제 시킬 수 있기 때문에, Generic Type으로 해줘야 편하게 커스텀 훅을 사용 할 수 있기 때문이다.