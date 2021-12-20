import './Notification.css'

const Notification = ({
    show,
    close,
    onDelete
}) => {
    
    return  (
            <div className={show ? "notification show" : "notification hide"}  >
             <a href="#" title="Close" className="modal-close" onClick={close}>x</a>
                <h4>Important!!!</h4>
                <div className="content">
                Are you sure you want to delete this recipe?
                </div>
                <button className="notification-btn" onClick={close}>No, I'm not sure</button>
                <button className="notification-btn" onClick={onDelete}>Yes, I'm sure</button>
            </div>
    );
}

export default Notification;
