import './Notification.css'

const Notification = () => ({
    show,
    onClose,
}) => {

    return (
        <div className= {show ? "show" : "hide" } >
            <div>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </div>
        </div>
    );
};

export default Notification;