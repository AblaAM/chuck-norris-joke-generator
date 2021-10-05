import React, { useState, useEffect } from "react";
import "./index.scss";
import img from "../../assets/chuck-norris-does-not-approve.jpeg";

const Model: React.FC = () => {
  const [counter, setCounter] = useState<number>(25);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setIsOpen(true);
    }
  }, [counter]);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setIsOpen(false)}>
              x
            </button>

            <img src={img} className="modal-image"></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
