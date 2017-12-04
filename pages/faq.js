import { Provider } from "react-redux";
import { initStore } from "../redux/store";
import { rehydrate } from "glamor";
import Angles from "../components/angles";
import Head from "../components/head";
import FAQ from "../components/faq";

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  rehydrate(window.__NEXT_DATA__.ids);
}

const store = initStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Angles>
          <Head title="FAQ" />
          <FAQ />
        </Angles>
      </Provider>
    );
  }
}
