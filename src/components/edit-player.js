import React, { useState, useEffect } from 'react';

const EditPlayer = ({ player, onSave }) => {
  const [name, setName] = useState('');
  const [ppg, setPpg] = useState('');
  const [rebounds, setRebounds] = useState('');
  const [assists, setAssists] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState('');
  const [draftPick, setDraftPick] = useState('');
  const [draftedBy, setDraftedBy] = useState('');
  const [image, setImage] = useState(null);
  const [prev_img, setPrev_img] = useState(player.img_name);

  useEffect(() => {
    if (player) {
      setName(player.name);
      setPpg(player.ppg);
      setRebounds(player.rebounds);
      setAssists(player.assists);
      setHeight(player.height);
      setWeight(player.weight);
      setAge(player.age);
      setCollege(player.college);
      setDraftPick(player.draft_pick);
      setDraftedBy(player.drafted_by);
      setImage(player.image);
    }
  }, [player]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      ...player,
      name,
      ppg,
      rebounds,
      assists,
      height,
      weight,
      age,
      college,
      draft_pick: draftPick,
      drafted_by: draftedBy,
      prev_img,
    };
    onSave(updatedPlayer);
  };

  if (!player) return null;

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
                :""
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