import React, { useEffect } from 'react';
import { Form, Input } from './styles';

interface ISearchBar {
    tagName: string;
    onChangeTagName: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.VFC<ISearchBar> = ({ tagName, onChangeTagName }) => {
    useEffect(() => {
        console.log(tagName);
    }, [tagName]);
    return (
        <Form>
            <Input value={tagName} onChange={onChangeTagName} />
        </Form>
    );
};

export default SearchBar;
