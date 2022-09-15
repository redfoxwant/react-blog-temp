import './header.css';

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span> 
                <span className="headerTitleLg">Blog</span>  
            </div>
            <img src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImg" />
        </div>
    )
}