import Navbar from "../../../components/blog_management/navbar/Navbar"
import { FormButton, Body, Form, FormInput, Title } from "../../../components/styles/Styles"
import Head from "next/head"
import Footer from "../../../components/footer/Footer"

const Register = () => {
    return (
        <>
            <Head>
                <title>Register - EC-Blogging Tool</title>
                <meta name="description" content="The registertion form for a new blog using the ec-blogging tool"></meta>
            </Head>
            <Navbar />
            <Body>
                <Form>
                    <Title>Register Form</Title>
                    <FormInput type="text" placeholder="Name"/>
                    <FormInput type="email" placeholder="Email" />
                    <FormInput type="password" placeholder="Password" />
                    <FormInput type="password" placeholder="PasswordConfirm Password" />
                    <FormInput type="text" placeholder="Enter a name for the blog"/>
                    <FormButton type="submit">
                        Register
                    </FormButton>
                </Form>
            </Body>
            <Footer/>
        </>
    )
}

export default Register
