import Navbar from "../../../components/blog_management/navbar/Navbar"
import { FormButton, Body, Form, FormInput, Title } from "../../../components/styles/Styles"
import Head from "next/head"
import Footer from "../../../components/footer/Footer"

const Login = () => {
    return (
        <>
            <Head>
                <title>Login - EC-Blogging Tool</title>
                <meta name="description" content="The Login form for accesing the login tool"></meta>
            </Head>
            <Navbar/>
            <Body>
                <Form>
                    <Title>Login</Title>
                    <FormInput type="email" placeholder="email"/>
                    <FormInput type="password" placeholder="Confirm Password"/>
                    <FormButton type="submit">
                        Login
                    </FormButton>
                </Form>
            </Body>
            <Footer />    
        </>
    )
}

export default Login
