import './singlePost.css';

export default function SinglePost(){
    return(
        <div className="singlePost">
          <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
             alt=""
              className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur 
                <div className="singlePostEdit">
                <i  className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Titicous</b>
                </span>
                <span className="singlePostDate">1 hour ago </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur quam nemo distinctio,
                 iure sint? Ipsum ratione adipisci excepturi voluptas natus similique earum, non cupiditate provident vero minima doloribus placeat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maxime impedit perferendis porro officiis expedita accusantium,
                 optio blanditiis deserunt officia voluptates quidem aliquid, harum nostrum adipisci fugit nesciunt iusto? Molestias?

            </p>
          </div>
        </div>
    )
}