import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  cursor: pointer;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
box-sizing:border-box;
padding:0 30px 0 20px;
margin-top:9px;
margin-left:20px;
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background-color:#eee;
font-size:14px;
color:#666;
&::placeholder{
    color:rgb(180,180,180);
}
&.focus{
    width:240px;
}
&.slide-enter{
    width:160px;
    transition:all 0.2s ease-out;
}
&.slide-enter-active{
    width:240px;
}
&.slide-exit{
transition:all 0.2s ease-out;
}
&.slide-exit-active{
    width:160px;
}
}
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focus {
      background: #777;
      color: #fff;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transition-origin: center center;
    transform: rotate(0deg);
  }
`;
export const SearchInfoItem = styled.a`
  font-size: 12px;
  dispaly: block;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
