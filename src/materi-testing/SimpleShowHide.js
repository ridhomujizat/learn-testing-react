import React, { useState } from "react";

const SimpleShowHide = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <p>Saya sedang {show ? "Muncul" : "Sembunyi"}</p>
      <button onClick={toggle}>{show ? "Sembunyikan" : "Munculkan"}</button>
    </div>
  );
};

export default SimpleShowHide;
