import Letter from "./letter";
import glamorous from "glamorous";
import { Heading, Paragraph, Link as A } from "evergreen-typography";
import { spacing, textSizes, colors } from "../theme";
import Box from "ui-box";
import { Navigation, pages } from "./navigation";
import { P, Section } from "./ui";
import CardContainer from "./CardContainer";

export default () => (
  <CardContainer>
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
  </CardContainer>
);
