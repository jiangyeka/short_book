# 简书

## 目录搭建

>引入Styled-Component第三方依赖配置不同组件css
>
>reset.css统一浏览器对css的设置 
>
>``` 
>import { createGlobalStyle } from 'styled-components'
>createGlobalStyle` `
>```
>
>

## CSSTransition修饰搜索框

>
>
>```react
>function App() {
>  const [inProp, setInProp] = useState(false);
>  return (
>    <div>
>      <CSSTransition in={inProp} timeout={200} classNames="my-node">
>        <div>
>          {"I'll receive my-node-* classes"}
>        </div>
>      </CSSTransition>
>      <button type="button" onClick={() => setInProp(true)}>
>        Click to Enter
>      </button>
>    </div>
>  );
>}
>.my-node-enter {
>  opacity: 0;
>}
>.my-node-enter-active {
>  opacity: 1;
>  transition: opacity 200ms;
>}
>.my-node-exit {
>  opacity: 1;
>}
>.my-node-exit-active {
>  opacity: 0;
>  transition: opacity 200ms;
>}
>```
>
>

## React-Redux

>
>
>redux数据框架
>
>react-redux方便我们在react使用redux





### 对数据管理

```
mapStateToProps
mapDispatchToProps
```

mutable 可变更的

immutable.js

immutable 对象

>
>
>对象声明immutable 后
>
>调用其属性不能用  **.**要用get
>
>修改要用set 底层实现还是返回一个新的

​	如果前面是js对象后面是immutable对象，造成前后调用方法不一样

可以用

```
import { combineReducers } from "redux-immutable"


const reducer = combineReducers({
    header: headerReducer
})

 focused: state.get("header").get("focused")
 state.getIn(["header","focused"])


```

## 热门搜索

有了reduxthunk就可以在action里面写异步代码了

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



*****

create react app底层也是node服务器

访问数据时候，现在工程目录下有没有对应路由，没有的话回去在public/api目录下找

以此构建写假数据

## 路由

 yarn add react-router-dom

ceil取整向上

```
BrowserRouter
路由
Route路由规则
```

