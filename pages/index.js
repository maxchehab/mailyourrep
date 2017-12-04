import Link from "next/link";
import Head from "../components/head";
import { Provider } from "react-redux";
import { initStore } from "../redux/store";
import { Dark, Light } from "../components/background";
import { style, rehydrate, css } from "glamor";
import { colors, spacing } from "../theme";
import glamorous, { Div } from "glamorous";
import App from "../components/app";
import Pattern from "../components/pattern";
import evergreen from "evergreen-colors";

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

const Angles = glamorous.div({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  background: "#016cd1",
  zIndex: 0,
  transformOrigin: -200
});

const store = initStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Div
          display={"flex"}
          justifyContent={"center"}
          height={"100%"}
          background={"016cd1"}
          overflow="scroll"
        >
          {/* <Pattern
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "absolute",
              zIndex: 0,
              transformOrigin: 0
            }}
          /> */}

          <Angles
            style={{
              transform: "skewY(-25deg)",

              background: evergreen.blue["200"]
            }}
          />
          <Angles
            style={{
              transform: "skewY(-35deg)",
              background: evergreen.blue["300"]
            }}
          />

          <Angles
            style={{
              transform: "skewY(-50deg)",

              background: evergreen.blue["400"]
            }}
          />
          <Angles
            style={{
              transform: "skewY(-70deg)",
              background: evergreen.blue["200A"]
            }}
          />

          <Div position="relative">
            <Div
              display={"flex"}
              padding={spacing.regular}
              zIndex={1}
              position={"relative"}
            >
              <Div maxWidth={"700px"}>
                <Head title="Home" />
                <App />
              </Div>
            </Div>
          </Div>
        </Div>
      </Provider>
    );
  }
}
