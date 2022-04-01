import React from 'react'
import { Nav } from '../../styles/Styles'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@mui/material'



const LoginRegister = styled.div`
    display: flex;
    padding-right: 60px;
`

const Navbar = () => {
    return (
        <Nav>
            <Link href="/posts">
                Posts
            </Link>
            <Link href="/ec-blogging-tool">
                Admin
            </Link>
            <Link href="mailto:ecleaver@live.com">
                Contact Admin
            </Link>
        </Nav>
    )
}

export default Navbar
