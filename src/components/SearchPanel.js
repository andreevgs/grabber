import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import {useDispatch} from "react-redux";
import {setOffers} from "../redux/actions/offers";

const { Search } = Input;

function SearchPanel() {
    const dispatch = useDispatch();

    const onSearch = value => console.log(value);

    useEffect(() => {
        dispatch(setOffers(0));
    }, []);

    return (
        <React.Fragment>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: '40%' }} loading={false} enterButton/>
        </React.Fragment>
    )
}

export default SearchPanel;