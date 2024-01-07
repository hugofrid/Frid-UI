import classNames from 'classnames'
import React from 'react'
import { ButtonVariation, type ButtonProps } from './Button.type'
import "./Button.style.scss"


const Button = ({
    size = 'DEFAULT',
    variation = ButtonVariation.PRIMARY,
    ...props
}: ButtonProps) => {

    const variationClassname = classNames("button")
    if (props.component === 'link') {
        const { buttonRef, ...linkProps } = props
        return (
            <a
                data-text={props.children}
                ref={buttonRef}
                className={classNames(variationClassname)}
                {...linkProps}
            > {props.children}
            </a>
        )
    } else if (props.component === 'custom') {
        return props.children(classNames(variationClassname))
    } else {
        const { buttonRef, ...buttonProps } = props
        return (
            <button
                ref={buttonRef}
                className={classNames(variationClassname)}
                {...buttonProps}
                type={props.type || 'button'}
            />
        )
    }
}

export default Button


