import React, { useCallback, useState } from 'react';
export default <T>(
    initValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>, (e?: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState(initValue);
    const onChangeValue = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return [value, setValue, onChangeValue];
};
