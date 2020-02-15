import React from "react";
import "../../style/cards.css";
const ViewCampaigns = ({ items }) => {
  // const [items]=blogs;
  const reDirect = props => {
    console.log("have been clicked");
  };
  return (
    <div className="centered">
      <div className="cards">
        {items.map(item => (
          <div key={item.id} className="card">
            <a href="#" onClick={reDirect}>
              <img src={item.imageUrl} alt="" />

              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Comments: {item.comment ? item.comment : "No comment"} </p>
                <p>View: {item.noOfView ? item.noOfView : "No view"} </p>
                <p>
                  {item.status === "published" ? (
                    <p>Published</p>
                  ) : (
                    <p style={{ color: "red" }}>Draft</p>
                  )}{" "}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCampaigns;
