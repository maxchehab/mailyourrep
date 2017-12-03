import Link from "next/link";
import Head from "../components/head";
import { Provider } from "react-redux";
import { initStore } from "../redux/store";
import { Dark, Light } from "../components/background";
import { style, rehydrate, css } from "glamor";
import { colors, spacing } from "../theme";
import { Div } from "glamorous";
import App from "../components/app";

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  rehydrate(window.__NEXT_DATA__.ids);
}

// Add global backgrounds and heights
css.global(
  `html, 
  body, 
  #__next, 
  body > div:first-child, 
  #__next > div:first-child`,
  {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
    background: colors.darkBackground
  }
);

const store = initStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Div
          display={"flex"}
          justifyContent={"center"}
          padding={spacing.regular}
        >
          <Div maxWidth={"900px"}>
            <Head title="Home" />
            <App />
          </Div>
        </Div>
      </Provider>
    );
  }
}
