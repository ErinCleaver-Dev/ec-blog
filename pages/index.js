import { getPosts } from "../firebase/models/posts"
<<<<<<< HEAD
import NavigationBar from "../components/enduser/navbar/Navbar"
=======

>>>>>>> parent of 8ea246d (update)

const HomePage = () => {
    let posts = []

    posts = getPosts();

    console.log(posts)
    return (
        
        <div>
<<<<<<< HEAD
            <NavigationBar />
=======
>>>>>>> parent of 8ea246d (update)
            <h1>Hello and welcome to the home page</h1>
        </div>
    )
}

export default HomePage
