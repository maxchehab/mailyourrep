import Letter from "./letter";
import glamorous from "glamorous";
import { spacing, textSizes, colors } from "../theme";

const Card = glamorous.div({
  padding: spacing.large,
  border: `1px solid ${colors.border}`,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: colors.lightBackground,
  boxShadow: "0 11px 22px 0 rgba(0,0,0,0.05)"
});

export default () => (
  <Card>
    <Letter />
  </Card>
);
