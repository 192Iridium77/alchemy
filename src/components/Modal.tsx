import React, { forwardRef, useImperativeHandle } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { Icon } from "alchemy-tech-ui";
import { ReactElement } from "react-markdown/lib/react-markdown"; // wtf?

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
    maxHeight: "75%",
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

interface ModalProps {
  children: ReactElement;
}

ReactModal.setAppElement("#root");

export const Modal = forwardRef(({ children }: ModalProps, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
    disableScroll();
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      onAfterOpen={disableScroll}
    >
      <ModalContainer>
        <CloseModalButton>
          <button onClick={closeModal}>
            <Icon type="Close" color="white" />
          </button>
        </CloseModalButton>
        {children}
      </ModalContainer>
    </ReactModal>
  );
});
