import React, { useState } from "react";
const PlayerForm = (props) => {
    const { callback } = props;
    const [playerName, setPlayerName] = useState("");
    const resetForm = () => {
        setPlayerName("");
    };
    return (React.createElement("form", { "data-testid": "MatchForm", className: "flex flex-col justify-center mb-4 gap-4 p-2 border border-gray-300 rounded-md", onSubmit: (evt) => {
            evt.preventDefault();
            callback(playerName).then(res => {
                if (res.ok) {
                    resetForm();
                }
                else {
                    console.log("Error while posting player");
                }
            });
        } },
        React.createElement("span", { className: "text-xl" }, "Nom du joueur"),
        React.createElement("input", { type: "text", className: "border border-gray-300 rounded-md", value: playerName, onChange: (evt) => setPlayerName(evt.target.value) }),
        React.createElement("button", { type: "submit", className: "bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md" }, "D\u00E9clarer le joueur")));
};
export default PlayerForm;
