import React, { Fragment } from 'react'
import { Container } from './styles'

const Layout = ({children}) => {
    return (
        <Fragment>
            <Container>{children}</Container>
        </Fragment>
    )
}

export default Layout

