import { useState } from "react";

export default () => {
  const [status, setStatus] = useState(0);
  const clickButton=()=>setStatus(status+1)
  return (
    <div className="App">
      <span>card{status}</span>
      <button onClick={clickButton}>click</button>
    </div>
  );
};
