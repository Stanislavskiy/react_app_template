import React from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

export default function Button(props) {
    const {
        // PROPS
        wrapperClass,
        text,
        children,
        icon,
        iconAlignStart = false,
        preventDefault = false,
        stopPropagation = false,

        // EVENTS
        onClick,

        // STYLES
        // --sizes--
        primary,
        medium,
        small,
        // --colors--
        light,
        green,
        dark,
        // --misc--
        outline
    } = props;

    const buttonIcon = icon && getIconLayout(icon, iconAlignStart);

    return (
        <button
            onClick={e => handleClick(e, onClick, preventDefault, stopPropagation)}
            className={cn(style.button, wrapperClass, {
                [style.buttonPrimary]: primary,
                [style.buttonMedium]: medium,
                [style.buttonSmall]: small,
                [style.buttonDark]: dark,
                [style.buttonGreen]: green,
                [style.buttonLight]: light,
                [style.buttonOutline]: outline,
            })}
        >
            {iconAlignStart && buttonIcon}
            {text}
            {children}
            {!iconAlignStart && buttonIcon}
        </button>
    )
}

function handleClick(e, callback, preventDefault, stopPropagation) {
    if (preventDefault) {
        e.preventDefault();
    }

    if (stopPropagation) {
        e.stopPropagation();
    }

    if (callback) {
        callback(e);
    }
}

function getIconLayout(icon, alignStart) {
    if (typeof icon === 'string') {
        return (
            <img
                className={cn(style.icon, {
                    [style.iconAlignStart]: alignStart,
                })}
                src={icon}
                alt={'icon'}
            />
        )
    }

    return (
        <span className={cn(style.icon, {
            [style.iconAlignStart]: alignStart,
        })}>
            {icon}
        </span>
    )
}