import { getPosts } from "../firebase/models/posts"
import Navbar from "../components/enduser/navbar/Navbar"

const HomePage = () => {
    let posts = []

    posts = getPosts();

    console.log(posts)
    return (
        <div>
            <Navbar />
            <h1>Hello and welcome to the home page</h1>
        </div>
    )
}

export default HomePage
