import "../css/itemList.css";

const ItemList = ({
  image,
  name,
  activity,
  element,
  check,
  message,
  miniPhoto,
  date,
}) => {
  return (
    <>
      <div className={`itemContainer ${check ? "active" : ""}`}>
        <div className="photoItem">
          <img src={image} alt="" />
        </div>
        <div className="contentItem">
          <div className="personItem">
            <div className="checkFlex">
              <p>
                <span className="namePerson">{name} </span>
                <span className="activityItem">{activity}</span>
                <span className="elementItem">{element}</span>
              </p>
              {check && <span className="checkItem"></span>}
            </div>
            <div className="dateItem">{date}</div>
            {message != "" && <span className="messageItem">{message}</span>}
          </div>
          {miniPhoto != "" && (
            <span className="miniPhotoItem">
              {<img src={miniPhoto} alt="coso" />}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemList;
