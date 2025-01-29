import React, { useState } from "react";
export var MatchResult;
(function (MatchResult) {
    MatchResult["LEFT_WIN"] = "LEFT_WIN";
    MatchResult["RIGHT_WIN"] = "RIGHT_WIN";
    MatchResult["DRAW"] = "DRAW";
})(MatchResult || (MatchResult = {}));
const MatchForm = (props) => {
    const { callback } = props;
    const [adversaryA, setAdversaryA] = useState("");
    const [adversaryB, setAdversaryB] = useState("");
    const [result, setResult] = useState(MatchResult.LEFT_WIN);
    const resetForm = () => {
        setAdversaryA("");
        setAdversaryB("");
        setResult(MatchResult.LEFT_WIN);
    };
    return (React.createElement("form", { "data-testid": "MatchForm", className: "flex flex-col justify-center mb-4 gap-4 p-2 border border-gray-300 rounded-md", onSubmit: (evt) => {
            evt.preventDefault();
            callback(adversaryA, adversaryB, result).then((res) => {
                if (res.ok) {
                    resetForm();
                }
                else {
                    // TODO: toast error
                    console.error("Error while posting match result");
                }
            });
        } },
        React.createElement("div", { className: "flex justify-between" },
            React.createElement("div", { className: "flex flex-col justify-between items-center mb-4 gap-4 p-2" },
                React.createElement("input", { type: "checkbox", className: "transform scale-150", checked: result === MatchResult.LEFT_WIN, onChange: () => setResult(MatchResult.LEFT_WIN) }),
                React.createElement("span", { className: "text-xl" }, "Adversaire A"),
                React.createElement("input", { type: "text", className: "border border-gray-300 rounded-md", value: adversaryA, onChange: (evt) => setAdversaryA(evt.target.value) })),
            React.createElement("div", { className: "flex flex-col justify-start align-item mb-4 gap-4 p-2 w-[100px]" },
                React.createElement("input", { type: "checkbox", className: "transform scale-150", checked: result === MatchResult.DRAW, onChange: () => setResult(MatchResult.DRAW) })),
            React.createElement("div", { className: "flex flex-col justify-between items-center mb-4 gap-4 p-2" },
                React.createElement("input", { type: "checkbox", className: "transform scale-150", checked: result === MatchResult.RIGHT_WIN, onChange: () => setResult(MatchResult.RIGHT_WIN) }),
                React.createElement("span", { className: "text-xl" }, "Adversaire B"),
                React.createElement("input", { type: "text", className: "border border-gray-300 rounded-md", value: adversaryB, onChange: (evt) => setAdversaryB(evt.target.value) }))),
        React.createElement("button", { type: "submit", className: "bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md" }, "D\u00E9clarer le match")));
};
export default MatchForm;
