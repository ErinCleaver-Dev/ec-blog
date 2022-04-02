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
    }
`

export const AlignNavLeft = styled.div`
    display: flex;
    padding-right: 60px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;
`

export const Form = styled.form`
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px; 
    width: 80%;
`

export const FormInput = styled.input`
    width: 90%;
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 20px;
    ::placeholder {
        text-align: center;
    }
`

export const FormButton = styled.button`
    background: #343A40;
    border-radius: 10px;
    font-size: 1.4em;
    outline: none;
    border: none;
    color: white;
    width: 400px;
    padding: 10px 50px;

`

export const Title = styled.h1`
    margin-bottom: 20px;
`