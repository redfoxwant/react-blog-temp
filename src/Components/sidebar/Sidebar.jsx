import './sidebar.css';

export default function Sidebar(){
    return(
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                quae cupiditate! Quam animi nesciunt expedita harum molestiae modi,
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">Follow US</span>
          <div className="sidebarSocials">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
          </div>
        </div>
    )
}