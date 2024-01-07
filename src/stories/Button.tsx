import UiButton from '@compenents/actions/buttons/Button' //' /actions/buttons/Button'
import { GlobalButtonProps } from '@compenents/actions/buttons/Button.type'
import React from 'react'


type Props = {
    label: string
} & GlobalButtonProps

const Button = ({ label, ...props }: Props) => {

    return (
        <UiButton {...props}  >
            {label}
        </UiButton>
    )
}

export default Button