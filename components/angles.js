import { css } from "glamor";
import { colors, spacing } from "../theme";
import glamorous, { Div } from "glamorous";
import evergreen from "evergreen-colors";

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

export default props => (
  <Div
    display={"flex"}
    justifyContent={"center"}
    height={"100%"}
    background={"016cd1"}
    overflow="scroll"
  >
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
        <Div maxWidth={"700px"}>{props.children}</Div>
      </Div>
    </Div>
  </Div>
);
