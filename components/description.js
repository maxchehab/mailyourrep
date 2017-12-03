import { Text } from "evergreen-typography";
import { spacing, textSizes } from "../theme";

export default props => (
  <Text
    is="p"
    marginTop={0}
    marginBottom={spacing.extraSmall}
    size={textSizes.small}
    color="extraMuted"
    {...props}
  />
);
