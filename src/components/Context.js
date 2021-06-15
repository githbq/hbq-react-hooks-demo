import React, { useContext } from "react";

const AppContext = React.createContext({});
const A = () => {
  const { name } = useContext(AppContext);
  return (
    <p>
      我是A组件的名字{name}
      <span>我是A的子组件{name}</span>
    </p>
  );
};
const B = () => {
  const { name } = useContext(AppContext);
  return <p>我是B组件的名字{name}</p>;
};

const Ceshi = () => {
  return (
    <AppContext.Provider value={{ name: "ctxName" }}>
      <A />
      <B />
    </AppContext.Provider>
  );
};
export default Ceshi;
