import React, { useEffect, useState } from "react";

const CompVariant = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUser("Prawito");
    }, 1000);
  }, []);
  return <>{user ? <p>Selamat datang {user}</p> : null}</>;
};

export default CompVariant;
