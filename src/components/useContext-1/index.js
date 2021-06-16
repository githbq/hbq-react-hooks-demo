import Child from "./Child";
import MyContext from "./MyContext";
const callParent = ()=>{
    alert('called parent')
}
export default () => {
  return (
    <div>
      <MyContext.Provider value={{ name: "111", age: 30 ,callParent}}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};
