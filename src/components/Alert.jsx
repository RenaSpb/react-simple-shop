import { useEffect } from 'react';

function Alert(props) {
    const { name = '', closeAlert } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} added to basket</div>
        </div>
    );
}

export { Alert };