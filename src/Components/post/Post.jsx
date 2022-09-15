import './post.css';

export default function Post(){
    return(
        <div className="post">
            <img src="https://images.unsplash.com/photo-1662598986485-f9d2603b48a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" 
            alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet.</span>
                <hr/>
                <span className="postDate">2 hours ago</span>
                <p className="postDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ullam,
                    nam facilis eum, fugiat reprehenderit omnis architecto repellat consequatur maiores sit, dignissimos sint nulla.
                </p>
            </div>
        </div>
    )
}