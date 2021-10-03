import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import { actionCreators } from "./store";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData();
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="https://upload.jianshu.io/admin_banners/web_images/5043/454c047f28a8fd4c4f78571c0f88b4de285c060a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          ></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
});
export default connect(null, mapDispatch)(Home);
