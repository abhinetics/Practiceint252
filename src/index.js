import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter'
import ChildA from './useContext/ChildA';
import Useref from './useRef/Useref';
import UseReducer from './useReducer/UseReducer';
import FromVal from './Form/FormVal';
// import Crud from './Crud';
import Child from './ChildtoPar/Child';
import Parent from './ChildtoPar/Parent';
import ProductList from './Tableprop/ProductList';
import Fetch from './Fetchdata/Fetch';
import AddItemForm from './AddItem/AddItemForm';
import Main from "./SlideShow/Slideshow";
import Search from './Search/Search';
import ShoppingCart from './Cart/ShoppingCart';
import StartTimer from './Countdown/StartTimer';
import ProgressBar from './Bar/ProgressBar';
import SubmitButton from './Button/SubmitButton';
import Exp from './Expense/Exp';
import WhatsApp from './Expense/WhatsApp';
import Life from './Lifecycle/Life';
import ListItem from './Real/ListItem';
import ImageSlid from './Real/ImageSlid';
import Toggle from './Real/Toggle';
import Checkbox from './Real/Checkbox';
import Calculate from './Real/Calculate';
import DisableBut from './Real/DisableBut';
import ShowHide from './Real/ShowHide';
import Dashboard from './Real/Dasboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App  name="hi" />
    <App  name="bye" />
    <Counter />
    <ChildA />
    <Useref />
    <UseReducer />
    <FromVal /> 
    <Child/> */}
    {/* <Parent/> */}
    {/* <ProductList/> */}
    {/* <Fetch/> */}
    {/* <AddItemForm/> */}
    {/* <Main/> */}
    {/* <Search/> */}
    {/* <ShoppingCart/> */}
    {/* <StartTimer/> */}
    {/* <ProgressBar/> */}
    {/* <SubmitButton/> */}
    {/* <Exp/> */}
    {/* <WhatsApp/> */}
    {/* <Life/> */}
    {/* <ListItem/> */}
    {/* <ImageSlid/> */}
    {/* <Toggle/> */}
    {/* <Checkbox/> */}
    {/* <Calculate/> */}
    {/* <DisableBut/> */}
    {/* <ShowHide/> */}
    <Dashboard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
