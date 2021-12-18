const Contacts = ({
        comment,
        user
}) => {
    return (
        <>
            <div className="user-comment">{user}</div>
            <div className="comments-box">
                 <p>
                 {comment}
                </p>
            </div>
        </>
    );
}

export default Contacts;