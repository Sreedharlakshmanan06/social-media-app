import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"


export default function Post({post}) {
    const [like,setlike]=useState(post.like)
    const [isliked,setisliked]=useState(false)

    const likehandler=()=>{
        setlike(isliked? like-1 : like+1)
        setisliked(!isliked)
    }
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUserName">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                <span className="postDate"> {post.date}</span> 
                </div>
                <div className="postTopRight"> 
                    <MoreVert />
                </div>
                
            </div>
            <div className="postCenter">
                <div className="postText">{post?.desc}</div>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png"  onClick={likehandler} alt="" className="postIcon" />
                    <img src="/assets/heart.png"  onClick={likehandler} alt="" className="postIcon" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
