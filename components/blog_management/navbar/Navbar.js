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

    let isLoggedIn = true;
    let role = 'admin'
    return (
        <Nav>
            <Link href="/ec-blogging-tool">
                EC-Blogging Tool
            </Link>
            <LoginRegister>
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
          
                

            </LoginRegister>
        </Nav>
    )
}

export default Navbar
