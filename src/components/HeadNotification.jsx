import '../css/headNotification.css'

const HeadNotification = () => {
  return (
    <>
    <div className="headNotificationContainer">
      <div className="notificationCount">
        <span className="notificationTitle">Notifications</span>
        <span className="countNotification">3</span>
      </div>
      <div className="markAll">
        Mark all as read
      </div>
    </div>
    </>
  )
}

export default HeadNotification