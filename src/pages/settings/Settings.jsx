import './settings.css';
import Sidebar from '../../Components/sidebar/Sidebar';

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWm5Bt_qBIceKeGsj0ZO5otcsN30jRUOmElw&usqp=CAU" 
                    alt=""
                     />
                     <label htmlFor="fileInput">
                     <i className="settingsPPIcon fa-solid fa-camera"></i>
                     </label>
                     <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder='Ronin'/>
                <label >Email</label>
                <input type="email" placeholder='Ronin@hotmail.com'/>
                <label >Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
            </div>
            <Sidebar/>
        </div>
    )
}