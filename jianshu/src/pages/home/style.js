import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 300px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    float: right;
    display: block;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    margin: 0;
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    color: #999;
    font-size: 13px;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
export const WriterWrapper = styled.div`

`;
export const WriterItem = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  img{
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .name{
    display: inline-block;
    padding-top: 10px;
    margin-left: 3px;
    font-size: 14px;
    cursor: pointer;
  }
  .follow {
    display: inline-block;
    float: right;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  p{
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
}
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 50px;
  line-height: 60px;
  text-align: center;
  font-size: 32px;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #bcbcbc;
`;
