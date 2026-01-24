import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

interface Props {
  title: string;
  cardDescription: string;
  modalDescription: string;
  image: string;
}

const Card = ({ title, cardDescription, modalDescription, image }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <div className="card-body">
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{cardDescription}</p>
        </div>
        <div className="button">
          <Button color="light" onClick={handleOpenModal}>
            Learn More
          </Button>
        </div>
        {isOpen && (
          <Modal>
            <h1>{title}</h1>
            <p>{modalDescription} </p>
            <Button color="danger" onClick={handleCloseModal}>
              Close Modal
            </Button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Card;
