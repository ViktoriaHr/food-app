import './ErrorMessage.css';

const ErrorMessage = ({
    children,
}) => {
    if (!children) {
        return null;
    }

    return (
        <div className="error">{children}</div>
    );
}

export default ErrorMessage;
