import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import { actionCreators } from "./store";
import { connect } from "react-redux";
class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
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
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>^</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else dispatch(actionCreators.toggleTopShow(false));
  },
});

export default connect(mapState, mapDispatch)(Home);
