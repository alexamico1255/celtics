import "../styles/players.css";
import React, { useState } from "react";

const AddPlayer = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
        
    setResult("Adding Player....");
    const formData =new FormData(event.target);

    const response = await fetch("http://localhost:3001/api/celtics/", {
        method: "POST",
        body: formData,
    });

    if (response.status === 200) {
        setResult("Player Added Successfully");
        
        props.appendPlayer(await response.json());
        event.target.reset();
    }
    else {
        console.log("Error Adding Player", response);
        setResult(response.message);
    }
  };

  return (
    <div id="add-player" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="player-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="add-player-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Player Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="ppg">PPG</label>
              <input
                type="number"
                id="ppg"
                name="ppg"
                value={inputs.ppg || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="rebounds">Rebounds</label>
              <input
                type="number"
                id="rebounds"
                name="rebounds"
                value={inputs.rebounds || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="assists">Assists</label>
              <input
                type="number"
                id="assists"
                name="assists"
                value={inputs.assists || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="height">Height</label>
              <input
                type="number"
                id="height"
                name="height"
                value={inputs.height || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={inputs.weight || ""}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;