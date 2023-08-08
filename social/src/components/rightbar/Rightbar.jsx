import './rightbar.css'
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightbar = ()=>{
        return (
            <div>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Tom Ainter</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
           <img src="/assets/advertisement.jpg" alt="" className="rightbarAd" />
           <h4 className="rightbarTitle">Online Friends</h4>
           <ul className="rightbarFriendList">
            {Users.map(u=>(
                <Online key={u.id} user={u} />
            ))}
        </ul>
        </div>
        );
    };
    
 const ProfileRightbar = ()=> {
      return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">France</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Thailand</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="/assets/person11.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person10.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person9.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person8.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person7.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person6.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Glenn Marshall</span>
            </div>

        </div>
      </>
      )
 }
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
       {profile? <ProfileRightbar /> : <HomeRightbar />}
      </div>
      </div>
  );
}
