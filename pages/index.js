import { getPosts } from "../firebase/models/posts"
import Navbar from "../components/enduser/navbar/Navbar"
import Footer from "../components/footer/Footer"
import {Body} from "../components/styles/Styles"

const HomePage = () => {
    let posts = []

    posts = getPosts();

    console.log(posts)
    return (
        
        <div>
            <Navbar />
            <Body>
            <h1>Hello and welcome to the home page</h1>
            </Body>
            <Footer/>
        </div>
    )
}

export default HomePage
