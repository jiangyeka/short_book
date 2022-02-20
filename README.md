---
title: 仿简书网站应用
data: 2021-9-14
sidebar: auto
showSponsor: true
tags: 
 - React
categories: 
 - 项目
 


---

::: tip

::: 



<h1 align="center">Welcome to jianshu 👋</h1>
<p align="center">
  <img src="https://img.shields.io/badge/node-v14.18.3-green" />
  <img src="https://img.shields.io/badge/npm-6.14.15-yellowgreen" />
  <img src="https://img.shields.io/badge/React-16.3.2-greenyellow" />
</p>







react 

redux

react-redux

react-router

immutableJS

styled commonent

PropTypes(以前是react的，后面改成第三方库)  开发模式调试



权限校验：登录后才能写文章












##  动画

CSS3可以借助transition和animation（一个关注**开始状态** 和 **结束状态**；另一个关注是多个状态，有帧的概念）

```js
import React from 'react';

import './style.css'
class Show extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        show:true
    };
    this.handleToggle=this.handleToggle.bind(this)
}

    render() {
        return <div>
            <h1 className={this.state.show?'show':'hide'}>hello</h1>
            <button onClick={this.handleToggle}>toggle</button>
        </div>;
    }
    handleToggle(){
        this.setState({show:!this.state.show})
    }
}

export default Show;
```



```css
.show{
    opacity: 1;
    transition: all 3s ease-in;
}
.hide{
    opacity: 0; 
    transition: all 3s ease-in;

}
```

```css
.show{
    animation: hide-item 2s ease-in forwards}
.hide{
    animation: show-item 2s ease-in forwards

}
@keyframes hide-item {
    0%{
    opacity: 1;
    color: gray;
    }
    50%{
        opacity: 0.5;
        color: orange; 
    }
    100%{
        opacity: 0;
        color: black;
    }
}
@keyframes show-item {
    0%{
opacity: 0;
color: red;
    }
    50%{
        opacity: 0.5;
        color: green; 
    }
    100%{
        opacity: 1;
color: blue;
    }
}
```







### react-transition-group

[CSSTranstion](http://reactcommunity.org/react-transition-group/css-transition)

出现，进入，退出

- `fade-appear`, `fade-appear-active`,`fade-appear-done`
- `fade-enter`, `fade-enter-active`,`fade-enter-done`
- `fade-exit`, `fade-exit-active`,`fade-exit-done`



```js
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './style.css'
class Show extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        show:true
    };
    this.handleToggle=this.handleToggle.bind(this)
}

    render() {
        return <div>

            <CSSTransition in={this.state.show}
            timeout={3000}
            classNames='fade'
            >
            <h1 >hello</h1>
            </CSSTransition>
            <button onClick={this.handleToggle}>toggle</button>
        </div>;
    }
    handleToggle(){
        this.setState({show:!this.state.show})
    }
}

export default Show;
```



```css
.fade-enter{
 opacity: 0;   
}
.fade-enter-active{
    opacity: 1;
    transition: opacity 1s ease-in;   
}
.fade-enter-done{
    opacity: 1;  
} 
   

.fade-exit{
    opacity: 1;
}
.fade-exit-active{
    opacity: 0;
    transition: opacity 1s ease-in;
}
.fade-exit-done{
    opacity: 0;
}
```

## Redux===Reducer+Flux



combineReducers更好的管理组件

## UI 容器

傻瓜 关注视图

聪明 关注业务逻辑

无状态组件 组件只有render函数时候，将组件写成一个函数 UI组件一般就可以写成无状态组件



## redux-thunk

中间件 在store和action中间（之前给store对象，现在给store函数）

属于*redux*

```js
import { applyMiddleware, createStore,compose } from "redux";
import reducer from './reducer.js'      
import thunk from "redux-thunk";
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
export  default store;



```

```
export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('/list.json').then(res=>{
            const data=res.data
            const action=initactioncreators()
            dispatch(action)
        })
    }
}
```





## redux-saga

```js
import { applyMiddleware, createStore,compose } from "redux";
import reducer from './reducer.js'      
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import todoSagas from './sagas'

const sagaMiddleware=createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);


const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas)
export  default store;



```




## react-redux

redux在组件中使用无非是 this.state=store.getState()  store.dispatch()

转换到react-redux中就变成 props连接



## styled-component

reset.css

```js
import { createGlobalStyle } from 'styled-components'
createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}`
```

## 搜索框动画

鼠标移入移出 搜索框长度发生变化

onFocus和onBlur事件监听

## immutable.js

管理store的数据

redux-immutable的combineReducers可以让redux的数据get方法一致

redux的combineReducers里的数据还需要用通过属性访问

```js
import { combineReducers } from "redux-immutable";


const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

focused: state.getIn(["header", "focused"]),
state.set("focused", true);
```

对数组转换的时候，由于fromJS特性，action的数据传入的数组也要转换fromJS



## 路由

react-router-dom

```js
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;

```

exact精准匹配



点击新闻跳转的时候不要用a标签，否则会再次加载当前htmly，要用Link标签包裹，这个属于router-dom

## 首页

回到顶部

```js
  handleScrollTop() {
    window.scrollTo(0, 0);
  }


 componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else dispatch(actionCreators.toggleTopShow(false));
  },
});
```



优化，为了避免props导致的重复渲染

PureComponent+immutablejs（一起用）

## 异步组件

添加react-loadable包

```js
/* eslint-disable import/no-anonymous-default-export */
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>正在加载</div>;
  },
});

export default () => <LoadableComponent />;


import { withRouter } from "react-router";
export default connect(mapState, mapDispatch)(withRouter(Detail));
```

## 代码格式化

```
"format":"eslint src/"


rules:{
	"react/jsx-indent":["error",4]
}
```

```
husky lint-staged -D
--fix
git add
```





需要查看生产环境体积

