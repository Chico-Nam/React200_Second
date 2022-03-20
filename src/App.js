import logo from './logo.svg';
import './App.css';
//import Props from './components/R017_Props';
//import PropsDataType from './components/R018_PropsDataType';
//import PropsBoolean from './components/R019_PropsBoolean';
// import PropsObjVal from './components/R020_PropsObjVal';
// import PropRequired from './components/R021_PropRequired';
// import PropsDefault from './components/R022_PropsDefault';
// import PropsNode from './components/R023_PropsNode';
// import ReactState from './components/R024_ReactState';
// import SetState from './components/R025_SetState';
// import ForceUpdate from './components/R026_ForceUpdate';
// import ComponentClass from './components/R027_ComponentClass';
// import PureComponentClass from './components/R028_PureComponentClass';
// import ShallowEqual from './components/R029_ShallowEqual';
// import FunctionComponent from './components/R030_FunctionComponent';
// import ReactHook from './components/R031_ReactHook';
// import Fragments from './components/R032_Fragments';
import ReturnMap from './components/R033_ReturnMap';



function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Part 2 React.js 기초 다지기</p>
      {/* <Props prop_value = 'THIS IS Props'/> */}
      { /*<PropsDataType String = 'React' Number = {200} Boolean = {1 === 1} Array = {[1,2,3]}
        Object = {{react : "리액트", number : "200"}} function = {console.log("FunctionProps : function")}
        /> */ }
      {/* <PropsBoolean BooleanTrueFalse={false}/> */}
      {/* <PropsBoolean BooleanTrueFalse/> */}
      {/* <PropsObjVal Object={{react : "REACT" , number : 200}}/> */}
      {/* <PropRequired ReactNumber = {200}/> */}
      {/* <PropsDefault ReactNumber={200}/> */}
      {/* <PropsNode>
        <span>node from App.js</span>
        <p>Add child Component one more!</p>
        </PropsNode> */}
      {/* <ReactState reactString={"react"}/> */}
      {/* <SetState/> */}
      {/* <ForceUpdate /> */}
      {/* <ComponentClass /> */}
      {/* <PureComponentClass /> */}
      {/* <ShallowEqual /> */}
      {/* <FunctionComponent content="[ THIS IS FunctionComponent ]"/> */}
      {/* <ReactHook /> */}
      {/* <Fragments /> */}
      <ReturnMap />
    </div>
  );
}

export default App;
