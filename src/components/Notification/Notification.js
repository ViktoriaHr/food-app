import './Notification.css'

const Notification = ({
    show,
    close,
    onDelete
}) => {
    
    return  (
            <div className={show ? "notification show" : "notification hide"}  >
                <h4>Important!!!</h4>
                <div class="content">
                Are you sure you want to delete this recipe?
                </div>
                <button className="notification-btn" onClick={close}>No, I'm not sure</button>
                <button className="notification-btn" onClick={onDelete}>Yes, I'm sure</button>
            </div>
    );
}

export default Notification;