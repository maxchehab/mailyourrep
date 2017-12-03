import Box from "ui-box";
import { Heading, Label } from "evergreen-typography";
import { TextInput } from "evergreen-text-input";
import { Textarea } from "evergreen-textarea";
import { spacing, textSizes, colors } from "../theme";
import Description from "./description";
import glamorous from "glamorous";
import { borderRadius } from "ui-box/lib/enhancers";
import { Button } from "evergreen-buttons";

const FormLabel = props => (
  <Label display="block" size={textSizes.regular} {...props} />
);

const FormTextInput = props => <TextInput width={"100%"} {...props} />;

const FormTextarea = props => <Textarea width={"100%"} {...props} />;

const FormGroup = props => <Box marginTop={spacing.small} {...props} />;

export default () => (
  <Box>
    <Heading size={textSizes.large}>Let's send a letter</Heading>

    <FormGroup>
      <FormLabel htmlFor={"address"}>Mailing Address</FormLabel>
      <Description>
        We'll use this to look up your representative in Congress.
      </Description>
      <FormTextInput
        id={"address"}
        placeholder={"1600 Pennsylvania Ave NW, Washington, DC"}
      />
    </FormGroup>

    <FormGroup>
      <FormLabel htmlFor={"name"}>Your Name</FormLabel>
      <FormTextInput id={"name"} placeholder={"Ada Lovelace"} />
    </FormGroup>

    <FormGroup>
      <FormLabel htmlFor={"letter"}>Write your letter!</FormLabel>
      <FormTextarea
        id={"letter"}
        placeholder={"I'm writing to ask you to..."}
      />
    </FormGroup>

    <FormGroup>
      <Button>{"Send!"}</Button>
    </FormGroup>
  </Box>
);
