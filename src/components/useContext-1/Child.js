import { useContext } from "react";
import MyContext from "./MyContext";
export default () => {
  const { name, age, callParent } = useContext(MyContext);

  return (
    <div>
      <span>
        child-name:{name},child-age:{age}
      </span>
      <button onClick={callParent}>click to callParent</button>
    </div>
  );
};
