<<<<<<< HEAD
import React from 'react'
import { StyledNavBar } from '../../styles/Styles'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@mui/material'



const LoginRegister = styled.div`
    display: flex;
    padding-right: 60px;
`

console.log(StyledNavBar)

const NavigationBar = () => {
    return (
        <StyledNavBar>
            <StyledNavBar.Link>
                <Link href="/posts">
                    Posts
                </Link>
            </StyledNavBar.Link>
            <StyledNavBar.Link>
                <Link href="/ec-blogging-tool">
                    Admin
                </Link>
            </StyledNavBar.Link>
            <StyledNavBar.Link>
                <Link href="mailto:ecleaver@live.com">
                    Contact Admin
                </Link>
            </StyledNavBar.Link>

        </StyledNavBar>
    )
}

export default NavigationBar
=======
>>>>>>> parent of 8ea246d (update)
