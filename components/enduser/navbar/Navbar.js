import React from 'react'
import { StyledNavBar, AlignNavLeft } from '../../styles/Styles'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@mui/material'



console.log(StyledNavBar)

const Navbar = () => {
    return (
        <StyledNavBar>
            <Link href="/posts">
                Posts
            </Link>
            <AlignNavLeft>
                <Link href="/ec-blogging-tool">
                    Admin
                </Link>

                <Link href="mailto:ecleaver@live.com">
                    Contact Admin
                </Link>
            </AlignNavLeft>
        </StyledNavBar>
    )
}

export default Navbar
