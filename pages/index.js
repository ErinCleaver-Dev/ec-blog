import { getPosts } from "../firebase/models/posts"


const HomePage = () => {
    let posts = getPosts();
    console.log(posts)
    return (
        
        <div>
            <h1>Hello and welcome to the home page</h1>
        </div>
    )
}

export default HomePage
