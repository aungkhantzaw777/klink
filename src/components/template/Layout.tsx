import React from 'react'
export type Props = {
    children: JSX.Element,
};

export const Layout: React.FC<Props> = ({ children }) => (
    <>
        <div className="container mx-auto">
            <h1>this is layout</h1>
            {children}
        </div>
    </>
);