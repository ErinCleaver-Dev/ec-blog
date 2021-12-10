import {db} from '../firebase'
import {ref, query, orderByValue, onValue} from 'firebase/database'

const postRef = ref(db, 'posts/')


const getPosts = () => {
    const getQuery = query(postRef, orderByValue());
    let posts = []
    onValue(getQuery, (snapshot) => {
        posts = snapshot.val();
    })

    return posts
}

const createNewPost = () => {

}

export {getPosts}
