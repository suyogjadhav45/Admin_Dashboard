import React, { useState } from "react";
import MyModal from "./ShowModal";
import "../App.css";

const Modal = ({ btnname, compinfo}) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);


    const onClickbtn = () => {
        setShowModal(true);
    }

    return (
        <>
            {btnname === "DELETE" ? <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailtertiary hover:bg-red-500 text-black" onClick={() => onClickbtn()}>{btnname}</button> : <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-tailtertiary3 text-black" onClick={() => onClickbtn()}>{btnname}</button>}

            {showModal && <MyModal closeModal={closeModal} compinfo={compinfo} />}
        </>
    );
};

export default Modal;