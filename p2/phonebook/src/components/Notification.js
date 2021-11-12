import React from "react";

const Notification = ({notification, notificationRef}) => {
    return (
        <div>
            <p ref={notificationRef} className="notification">{notification}</p>
        </div>
    )
}

export default Notification