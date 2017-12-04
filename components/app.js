import Letter from "./letter";
import glamorous from "glamorous";
import { Heading, Paragraph, Link as A } from "evergreen-typography";
import { spacing, textSizes, colors } from "../theme";
import { TabNavigation, Tab } from "evergreen-tabs";
import Box from "ui-box";
import Link from "next/link";

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

const HR = glamorous.hr({
  background: `${colors.border}`,
  border: "none",
  marginBottom: spacing.regular,
  height: "1px"
});

const P = props => <Paragraph marginTop={spacing.small} {...props} />;
const Section = props => <Box marginBottom={spacing.regular} {...props} />;
const TabLink = props => (
  <Tab isSelected={props.isSelected}>{props.children}</Tab>
);

export default () => (
  <Card>
    <div>
      <Section>
        <Heading size={textSizes.large}>Hi 👋🏻 Welcome to MailYourRep. </Heading>

        <P>
          We'll help you send a snail-mail to your congress person. In the form
          below, type your address and we'll figure out who represents you.{" "}
        </P>
      </Section>

      <Section>
        <Letter />
      </Section>

      <HR />

      <Box display={"flex"} justifyContent={"center"}>
        <TabNavigation>
          <TabLink isSelected>Home</TabLink>
          <TabLink>About</TabLink>
          <TabLink>FAQ</TabLink>
        </TabNavigation>
      </Box>
    </div>
  </Card>
);
