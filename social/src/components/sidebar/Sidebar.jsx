import  './sidebar.css'
import {Users} from "../../dummyData"
import CloseFriend from "../closefriend/CloseFriend"
import {RssFeed,Chat,PlayCircleFilled,Group,Bookmark,Help,Work,Event,School} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar" >
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListitem">
                    <RssFeed className="sidebarIcon" />
                   <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListitem">
                    <Chat className="sidebarIcon" />
                   <span className="sidebarListItemText">Chats</span>
                </li><li className="sidebarListitem">
                    <PlayCircleFilled className="sidebarIcon" />
                   <span className="sidebarListItemText">Videos</span>
                </li><li className="sidebarListitem">
                    <Group className="sidebarIcon" />
                   <span className="sidebarListItemText">Groups</span>
                </li><li className="sidebarListitem">
                    <Bookmark className="sidebarIcon" />
                   <span className="sidebarListItemText">Bookmarks</span>
                </li><li className="sidebarListitem">
                    < Help className="sidebarIcon" />
                   <span className="sidebarListItemText">Questions</span>
                </li><li className="sidebarListitem">
                    <Work className="sidebarIcon" />
                   <span className="sidebarListItemText">Jobs</span>
                </li><li className="sidebarListitem">
                    <Event className="sidebarIcon" />
                   <span className="sidebarListItemText">Courses</span>
                </li><li className="sidebarListitem">
                    <School className="sidebarIcon" />
                   <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              {Users.map(u=>(
                <CloseFriend key={u.id} user={u} />
              ))}
                
               
            </ul>
        
        </div>
    </div>
  )
}
