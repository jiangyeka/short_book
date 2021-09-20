import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
class Home extends Component {
  render() {
    return (<HomeWrapper>
      <HomeLeft>
        <img className="banner-img" src="https://pic4.zhimg.com/v2-387bcdf9b3769b5ce9ad2b5abf91fda7_b.png"></img>
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
    </HomeWrapper >)
  }
}
export default Home