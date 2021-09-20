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
