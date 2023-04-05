import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import SignUp from "./user/SignUp";
import LogIn from "./user/LogIn";
import CreateArticle from "../articles/CreateArticle";
import { Icon } from "alchemy-tech-ui";

// built in styling for ReactModal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
  },
};

const CloseModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
`;

const ModalContainer = styled.div`
  position: relative;
`;

export enum ModalTypes {
  SignUp = "SignUp",
  LogIn = "LogIn",
  CreateArticle = "CreateArticle",
}

const modalComponents = {
  [ModalTypes.SignUp]: SignUp,
  [ModalTypes.LogIn]: LogIn,
  [ModalTypes.CreateArticle]: CreateArticle,
};

interface ModalProps {
  isOpen: boolean;
  component?: ModalTypes;
  closeModal: () => void;
  disableScroll: () => void;
}

ReactModal.setAppElement("#root");

export default function Modal({
  isOpen,
  component,
  closeModal,
  disableScroll,
}: ModalProps) {
  const ModalComponent = component ? modalComponents[component] : undefined;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      onAfterOpen={disableScroll}
    >
      <ModalContainer>
        <CloseModalButton>
          <Icon onClick={closeModal} type="Close" color="white" />
        </CloseModalButton>
        {ModalComponent ? <ModalComponent closeModal={closeModal} /> : null}
      </ModalContainer>
    </ReactModal>
  );
}
