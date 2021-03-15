import React from 'react';
import cn from 'classnames';
import style from './SearchBar.module.scss';

export default function SearchBar(props) {
    const {value, placeholder="Search", onChange, wrapperClass} = props;

    return (
        <input
            className={cn(style.input, wrapperClass)}
            type={'text'}
            value={value ? value : ''}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
        />
    )
}