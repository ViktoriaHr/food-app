const Comments = ({
        comment,
        user
}) => {
    return (
        <div className="single-comment">
            <div className="user-comment">{user}: </div>
            <div className="comments-box">
                 <p>
                 {comment}
                </p>
            </div>
        </div>
    );
}

export default Comments;