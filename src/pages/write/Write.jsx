import './write.css';

export default function Write(){
    return(
        <div className="write">
            <img src="https://images.unsplash.com/photo-1651610526505-a46802a4f2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
             alt="" 
             className="writeImg" />
          <form  className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder="Title" className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story.....' type="text" className='writeInput writeText' >

                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
          </form>
        </div>
    )
}