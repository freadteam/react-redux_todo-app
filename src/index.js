import React from 'react';
import ReactDOM from 'react-dom';
//storeの作成
import { createStore, applyMiddleware } from "redux";
//非同期処理
import thunk from "redux-thunk";
//reactとreduxの紐付け（provider）
import { Provider } from "react-redux";
//reducerを読み込む
import rootReducer from "./reducers";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

// middleWare 用の配列を作成する
const middleWares = [thunk];
// store に適用する
const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
	<Provider store={store}>
       {/* <MuiThemeProvider>*/}
			<App />
       {/* </MuiThemeProvider>*/}
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
