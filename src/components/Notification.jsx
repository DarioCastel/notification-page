import '../css/notification.css'
import HeadNotification from './HeadNotification'
import ItemList from './ItemList'

const Notification = () => {
  return (
    <div className="containerNotification">
        <HeadNotification/>
        <section className="contentNotification">
            <ItemList/>
        </section>
    </div>
  )
}

export default Notification