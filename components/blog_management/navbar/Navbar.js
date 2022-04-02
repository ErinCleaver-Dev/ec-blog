import React from 'react'
import { StyledNavBar, AlignNavLeft } from '../../styles/Styles'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@mui/material'





const Navbar = () => {

    let isLoggedIn = false;
    let role = 'admin'
    return (
        <StyledNavBar>
            <Link href="/ec-blogging-tool">
                    EC-Blogging Tool
            </Link>
            <AlignNavLeft>
                <Link href="/">
                    Home
                </Link> 
                {isLoggedIn ? (<>
                    {role == "admin" ? 
                    (<>    
                            <Link href="/ec-blogging-tool/admin">
                            Admin
                            </Link> 
                    </>) 
                    : 
                    (<>
                                <Link href="/ec-blogging-tool/admin">
                                    Blogger
                                </Link>
                        </>)


                    }
                    <a>
                        Log out
                    </a>
                </>) : (<>
                        <Link href="/ec-blogging-tool/login">
                        Login
                        </Link>

                        <Link href="/ec-blogging-tool/register">
                            Register
                        </Link>


                </>)}
            </AlignNavLeft>
        </StyledNavBar>
    )
}

export default Navbar
