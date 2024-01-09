import '../css/itemList.css'

const ItemList = () => {
  return (
    <>
    <div className="itemContainer">
      <div className="photoItem">
        foto
      </div>
      <div className="contentItem">
        <div className="personItem">
          <span className="namePerson">Mark Webber </span>
          <span className="activityItem"> reacted to your recent post </span>
          <span className="elementItem">My first tournament day!</span>
          <span className="checkItem">o</span>
          <span className="miniPhotoItem">f</span>
        </div>
        <div className="dateItem">1m ago</div>
      </div>
    </div>
    </>
  )
}

export default ItemList