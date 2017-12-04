import Letter from "./letter";
import glamorous from "glamorous";
import { Heading, Paragraph } from "evergreen-typography";
import { spacing, textSizes, colors } from "../theme";
import Box from "ui-box";

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

const P = props => <Paragraph marginTop={spacing.small} {...props} />;

export default () => (
  <Card>
    <div>
      <Box marginBottom={spacing.regular}>
        <Heading size={textSizes.large}>Hi 👋🏻 Welcome to MailYourRep. </Heading>

        <P>
          We'll help you send a snail-mail to your congress person. In the form
          below, type your address and we'll figure out who represents you.{" "}
        </P>
      </Box>

      <Letter />
    </div>
  </Card>
);
