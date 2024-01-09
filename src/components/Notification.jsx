import '../css/notification.css'
import HeadNotification from './HeadNotification'
import ItemList from './ItemList'
import MarkWebber from '../img/avatar-mark-webber.webp'
import Chess from '../img/image-chess.webp'
import AngelaGray from '../img/avatar-angela-gray.webp'
import JacobThompson from '../img/avatar-jacob-thompson.webp'
import Risky from '../img/avatar-rizky-hasanuddin.webp'
import Kimberly from '../img/avatar-kimberly-smith.webp'
import Nathan from '../img/avatar-nathan-peterson.webp'
import Anna from '../img/avatar-anna-kim.webp'



const arrayPerson = [
  {
    id:1,
    image:`${MarkWebber}`,
    name:"Mark Webber",
    activity:"reacted to your recent post",
    element:"My first tournament today!",
    check:true,
    message:"",
    miniPhoto:"",
    date:"1m ago"
  },
  {
    id:2,
    image:`${AngelaGray}`,
    name:"Angela Gray",
    activity:"followed you",
    element:"",
    check:true,
    message:"",
    miniPhoto:"",
    date:"5m ago"
  },
  {
    id:3,
    image:`${JacobThompson}`,
    name:"Jacob Thompson",
    activity:"has joined your group",
    element:"Chess Club",
    check:true,
    message:"",
    miniPhoto:"",
    date:"1 day ago"
  },
  {
    id:4,
    image:`${Risky}`,
    name:"Risky Hasanuddin",
    activity:"send you a private message",
    element:"",
    check:false,
    message:"Hello, thank you for setting up the Chess Club. I've been a member for a few weeks now and i'm already having a lot of fun and improving my game.",
    miniPhoto:"",
    date:"5 day ago"
  },
  {
    id:5,
    image:`${Kimberly}`,
    name:"Kimberly Smith",
    activity:"commented your picture",
    element:"",
    check:false,
    message:"",
    miniPhoto:`${Chess}`,
    date:"1 week ago"
  },
  {
    id:6,
    image:`${Nathan}`,
    name:"Nathan Peterson",
    activity:"reacted to your recent post",
    element:"5 end-game strategies to increase your win rate",
    check:false,
    message:"",
    miniPhoto:"",
    date:"2 week ago"
  },
  {
    id:7,
    image:`${Anna}`,
    name:"Anna Kim",
    activity:"left your group",
    element:"Chess Club",
    check:false,
    message:"",
    miniPhoto:"",
    date:"2 week ago"
  }



]

const Notification = () => {
  return (
    <div className="containerNotification">
        <HeadNotification/>
        <section className="contentNotification">
            {arrayPerson.map((item)=>(
              <ItemList 
              key={item.id}
              image={item.image}
              name={item.name}
              activity={item.activity}
              element={item.element}
              check={item.check}
              message={item.message}
              miniPhoto={item.miniPhoto}
              date={item.date}
              />
            ))}
        </section>
    </div>
  )
}

export default Notification