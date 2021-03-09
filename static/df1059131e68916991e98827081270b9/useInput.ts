import { useState, useCallback, Dispatch, SetStateAction } from 'react';

const hooks = <T>(
    initalValue: T,
): [T, Dispatch<SetStateAction<T>>, (e?: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState<typeof initalValue>(initalValue);
    const changer = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return [value, setValue, changer];
};

export default hooks;
