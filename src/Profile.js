import React from "react";
import "./Profile.css";

function Profile() {
  const cardStyle = {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={cardStyle}>
        <img src="https://www.shutterstock.com/image-photo/joyful-happy-african-american-young-600nw-1470743384.jpg" alt="Profile" className="circle-img" />
        <h3>Student Name</h3>
        <p>Aspiring Developer</p>
      </div>
    </div>
  );
}

export default Profile;