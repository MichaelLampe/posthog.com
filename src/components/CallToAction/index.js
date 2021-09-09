import React from 'react'
import Link from 'components/Link'
import cntl from 'cntl'

const primary = cntl`
    bg-primary
    dark:bg-primary-dark
    text-white
    dark:text-primary
    hover:text-white
    hover:dark:text-primary
    border-primary
    dark:primary-dark
`

const secondary = cntl`
    bg-white
    border-white
    text-primary
    hover:text-primary
`

const outline = cntl`
    bg-tan
    bg-opacity-75
    dark:bg-primary
    text-primary
    text-opacity-80
    hover:text-opacity-100
    dark:text-primary-dark
    hover:text-primary
    border-opacity-10
    hover:border-opacity-25
    active:border-opacity-50
    border-primary
    dark:border-primary-dark
`

const buttonTypes = {
    primary,
    secondary,
    outline,
}

const button = (type = 'primary', width = 'auto', className = '') => cntl`
    py-2
    px-5
    text-center
    font-bold
    text-[17px]
    select-none
    border-3
    rounded-full
    inline-block
    w-${width}
    ${buttonTypes[type] || ''}
    ${className}
`

export const CallToAction = ({ type = 'primary', width = 'auto', href, to, onClick, children, className }) => {
    const url = to || href
    return (
        <Link className={button(type, width, className)} onClick={onClick} to={url}>
            {children}
        </Link>
    )
}