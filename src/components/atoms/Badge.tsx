import React from 'react'
type props = {
    children?: string,
    handleClick?: (value:number) => {},
    classes?: string 
}

export const Badge: React.FC<props> = ({ children, classes }) => {
    return (
        <>
            <span className={`inline-flex cursor-pointer items-center rounded-full  px-2.5 py-0.5 text-xs font-medium  ${classes}`}>
                {children}
            </span>
        </>
    )
}