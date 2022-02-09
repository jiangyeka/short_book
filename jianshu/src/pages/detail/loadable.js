/* eslint-disable import/no-anonymous-default-export */
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>正在加载</div>;
  },
});

export default () => <LoadableComponent />;
