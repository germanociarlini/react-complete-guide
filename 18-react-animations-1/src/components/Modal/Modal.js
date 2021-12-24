import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const ANIMATION_TIMING = {
  enter: 400,
  exit: 200,
};

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={ANIMATION_TIMING}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
