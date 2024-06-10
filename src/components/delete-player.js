import "../styles/players.css";
import React, { useState } from "react";

const DeleteDialog = ({ _id, name, hidePlayer, closeDialog }) => {
  const [result, setResult] = useState("");

  const deletePlayer = async (event) => {
    const response = await fetch(
      `http://localhost:3001/api/players/${_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Player Successfully deleted");
      hidePlayer();
    } else {
      console.log("Error deleting player", response);
      setResult(response.message);
    }

    closeDialog();
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete {name}?</h3>
            <section>
              <button onClick={deletePlayer}>Yes</button>
              <button onClick={closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
