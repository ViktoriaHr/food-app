
import { useState } from "react";

const CommentBox = ({
    user,
    recipe
}) => { 

      const [comment, setComment] = useState("");


    const addComment = (e) => {
        e.preventDefault();
        console.log(comment);
        setComment("")

    }

    
    return(
    <div className="comments">
        <div>{comment}</div>
        <div>Hi {}, You can add a comment here</div>
        <form className="create-form" method="POST" onSubmit={addComment}  >
            <input type="text" value={comment}
        onChange={(e) => setComment(e.target.value)} />
            <button className="main-btn" >Add a comment</button>
        </form>
    </div>
)
}
export default CommentBox;