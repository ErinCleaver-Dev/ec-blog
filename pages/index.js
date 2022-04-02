import { getPosts } from "../firebase/models/posts"
import NavigationBar from "../components/enduser/navbar/NavigationBar"

const HomePage = () => {
    let posts = []

    posts = getPosts();

    console.log(posts)
    return (
        <div>
            <NavigationBar />
            <h1>Hello and welcome to the home page</h1>
        </div>
    )
}

export default HomePage
