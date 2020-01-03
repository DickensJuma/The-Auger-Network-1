import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({
    subcategory,
    children,
    className,
    ...props
}: {
    subcategory: string
    children?: any
    className?: string
}) => (
    <Link
        to={`/search?subcategory=${encodeURIComponent(subcategory)}`}
        className={className}
        {...props}
    >
        {children || subcategory}
    </Link>
)

export default Links
