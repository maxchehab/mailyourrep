import glamorous from "glamorous";
import { spacing, colors } from "../theme";
import Box from "ui-box";
import { Paragraph } from "evergreen-typography";

export const Card = glamorous.div({
  padding: spacing.large,
  border: `1px solid ${colors.border}`,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: colors.lightBackground,
  boxShadow: "0 11px 22px 0 rgba(0,0,0,0.05)"
});

export const HR = glamorous.hr({
  background: `${colors.border}`,
  border: "none",
  marginBottom: spacing.regular,
  height: "1px"
});

export const P = props => <Paragraph marginTop={spacing.small} {...props} />;
export const Section = props => (
  <Box marginBottom={spacing.regular} {...props} />
);
