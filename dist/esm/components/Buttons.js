import IconArrowCircleRight from "./icons/IconArrowCircleRight";
import IconPersonAdd from "./icons/IconPersonAdd";
import IconPersonGroupAdd from "./icons/IconPersonGroupAdd";
import React from "react";
export function PlusButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "btn-sm border rounded-full h-5 flex justify-center hover:border-blue-200 hover:scale-125 hover:cursor-pointer", onClick: onClick },
        React.createElement("span", { className: "group-hover:scale-125" },
            React.createElement("i", { className: "fa fa-plus fa-xs mr-1" }),
            label)));
}
export function MinusButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "btn-sm border rounded-full h-5 flex justify-center hover:border-blue-200 hover:scale-125 hover:cursor-pointer", onClick: onClick },
        React.createElement("span", { className: "group-hover:scale-125" },
            React.createElement("i", { className: "fa fa-minus fa-xs mr-1" }),
            label)));
}
export function PrimaryButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium", onClick: onClick }, label));
}
export function SecondaryButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-white hover:bg-cornflower-blue-100 text-cornflower-blue-500 border-cornflower-blue-500  py-2 px-4 border rounded-full shadow text-sm font-semibold", onClick: onClick }, label));
}
export function CancelButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded-full shadow text-sm", onClick: onClick }, label));
}
export function NextButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center", onClick: onClick },
        label,
        React.createElement(IconArrowCircleRight, { className: "ml-2" })));
}
export function CreateNewTeamButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-white hover:bg-cornflower-blue-100 text-cornflower-blue-500 border-cornflower-blue-500  py-2 px-4 border rounded-full shadow text-sm font-semibold flex", onClick: onClick },
        React.createElement(IconPersonGroupAdd, { className: "mr-2" }),
        label));
}
export function CreateNewUserButton(_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center", onClick: onClick },
        React.createElement(IconPersonAdd, { className: "mr-2" }),
        label));
}
//# sourceMappingURL=Buttons.js.map