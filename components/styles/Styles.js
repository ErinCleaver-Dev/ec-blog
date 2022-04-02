import styled from 'styled-components'
import { Box } from '@mui/material'



export const StyledNavBar = styled(Box)`
    background: #343A40;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-left: 60px;
    a {
        margin-left: 10px;
        padding: 10px;
        color: white;
        text-decoration: none;
        font-size: 1.4em;
        cursor: pointer;
    }
    a:hover {
        background-color: #161718;
        border-radius: 5px;
`

