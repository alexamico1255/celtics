import React, { useState } from 'react';

const EditPlayer = (props) => {
  const [name, setName] = useState(props.name);
  const [ppg, setPpg] = useState(props.ppg);
  const [rebounds, setRebounds] = useState(props.rebounds);
  const [assists, setAssists] = useState(props.assists);
  const [height, setHeight] = useState(props.height);
  const [weight, setWeight] = useState(props.weight);
  const [age, setAge] = useState(props.age);
  const [college, setCollege] = useState(props.college);
  const [draftPick, setDraftPick] = useState(props.draft_pick);
  const [draftedBy, setDraftedBy] = useState(props.drafted_by);
  const [image, setImage] = useState(null);
  const [prev_img, setPrev_img] = useState(props.img_name);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('ppg', ppg);
    formData.append('rebounds', rebounds);
    formData.append('assists', assists);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('age', age);
    formData.append('college', college);
    formData.append('draft_pick', draftPick);
    formData.append('drafted_by', draftedBy);
    if (image) {
      formData.append('img', image);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/players/${props.id}`,
        {
          method: 'PUT',
          body: formData,
        }
      );

      if (response.ok) {
        const updatedPlayer = await response.json();
        props.onSave(updatedPlayer);
      } else {
        console.log('Error Editing Player', response);
      }
    } catch (error) {
      console.error('Error Editing Player', error);
    }
  };

  return (
    <div className="edit-player">
      <h3>Edit Player</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          PPG:
          <input type="text" value={ppg} onChange={(e) => setPpg(e.target.value)} />
        </label>
        <label>
          Rebounds:
          <input type="text" value={rebounds} onChange={(e) => setRebounds(e.target.value)} />
        </label>
        <label>
          Assists:
          <input type="text" value={assists} onChange={(e) => setAssists(e.target.value)} />
        </label>
        <label>
          Height:
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Weight:
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          College:
          <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
        </label>
        <label>
          Draft Pick:
          <input type="text" value={draftPick} onChange={(e) => setDraftPick(e.target.value)} />
        </label>
        <label>
          Drafted By:
          <input type="text" value={draftedBy} onChange={(e) => setDraftedBy(e.target.value)} />
        </label>
        <section className="columns">
          <p id="img-prev-section">
            <img
              id="img-prev"
              src={
                image != null
                  ? URL.createObjectURL(image)
                  : prev_img != null
                  ? `http://localhost:3001/${prev_img}`
                  : ''
              }
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPlayer;
