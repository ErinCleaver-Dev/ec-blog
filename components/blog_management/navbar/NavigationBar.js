import React from 'react'
import { StyledNavBar } from '../../styles/Styles'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@mui/material'



const LoginRegister = styled.div`
    display: flex;
    padding-right: 60px;
`

const NavigationBar = () => {

    let isLoggedIn = true;
    let role = 'admin'
    return (
        <StyledNavBar>
            <Link href="/ec-blogging-tool">
                <StyledNavBar.Brand>
                    EC-Blogging Tool
                </StyledNavBar.Brand>
            </Link>
            <StyledNavBar.Toggle aria-controls ="basic-navbar-nav"/>
            <StyledNavBar.Collapse id="basic-navbar-nav">
                    {isLoggedIn ? (<>
                        {role == "admin" ? 
                        (<>    
                            <StyledNavBar.Link>
                                <Link href="/ec-blogging-tool/admin">
                                Admin
                                </Link> 
                            </StyledNavBar.Link>
                        </>) 
                        : 
                        (<>
                                <StyledNavBar.Link>
                                    <Link href="/ec-blogging-tool/admin">
                                        Blogger
                                    </Link>
                                </StyledNavBar.Link>
                            </>)


                        }
                        <a>
                            Log out
                        </a>
                    </>) : (<>
                        <StyledNavBar.Link>
                            <Link href="/ec-blogging-tool/login">
                            Login
                            </Link>
                        </StyledNavBar.Link>
                        <StyledNavBar.Link>
                            <Link href="/ec-blogging-tool/register">
                                Register
                            </Link>
                        </StyledNavBar.Link>


                    </>)}
            </StyledNavBar.Collapse>
        </StyledNavBar>
    )
}

export default NavigationBar
