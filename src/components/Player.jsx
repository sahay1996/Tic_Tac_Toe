import { useState } from "react";
export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    console.log(event+" hello ");
    setPlayerName(event.target.value);
  }
  console.log(isEditing);
  return (
    <li>
      <span className="player">
        {isEditing === false && (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        {isEditing === true && (
          <input
            type="text"
            placeholder="enter name"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
      </span>
      <button onClick={handleEditClick}>
        {isEditing === true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
