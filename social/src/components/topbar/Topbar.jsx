import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarcontainer">
        <div classname="topbarLeft">
          <span className="logo">Ottiline</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search  className="searchIcon"/>
           <input placeholder="search for friend, post or video" className="searchinput" />

          </div>
        </div>
        <div className="topbarRight"></div>
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person1.jpg" alt="" className="topbarImg" />
      
    </div>
  )
}
