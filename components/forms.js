import { TextInput } from "evergreen-text-input";
import { Textarea } from "evergreen-textarea";
import { Label } from "evergreen-typography";
import { spacing, textSizes, colors } from "../theme";
import Box from "ui-box";

export const FormLabel = props => (
  <Label display="block" size={textSizes.regular} {...props} />
);

export const FormTextInput = props => <TextInput width={"100%"} {...props} />;

export const FormTextarea = props => <Textarea width={"100%"} {...props} />;

export const FormGroup = props => <Box marginTop={spacing.small} {...props} />;
