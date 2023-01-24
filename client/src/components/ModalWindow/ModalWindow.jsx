import React, { useEffect, useContext, useState } from "react";
import ButtonAll from "../Button/ButtonAll/ButtonAll";
import { ReactComponent as LogoImg } from "./image/logoHeader.svg";
import "./Modal.scss";

const ModalWindow = ({
  modalActive,
  setModalActive,
  modalText,
  setModalText,
}) => {
  return (
    <div className="modal-window__wrapper">
      <div
        className={modalActive ? "modal-window active" : "modal-window"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-window__header">
          <LogoImg />
        </div>
        <h3 className="modal-window__main">{modalText}</h3>
        <div className="modal-window__footer">
          <ButtonAll
            text="OK"
            className="section__btn-collection"
            onClick={() => setModalActive(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
