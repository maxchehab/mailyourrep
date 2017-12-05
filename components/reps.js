import Box from "ui-box";
import { colors, textColors, spacing } from "../theme";
import { Text, Label } from "evergreen-typography";
import { Checkbox } from "evergreen-checkbox";

const DarkContainer = props => (
  <Box
    background={colors.darkBackground}
    minHeight={spacing.extraLarge}
    borderRadius={5}
    display="flex"
    alignItems="center"
    padding={spacing.extraSmall}
    {...props}
  />
);

const EmptyState = () => <Text>Enter your address above!</Text>;

const Reps = ({ reps }) => {
  if (!reps.reps) return <EmptyState />;
  console.log(reps.reps);
  const rs = reps.reps.map(rep => (
    <Box>
      <Checkbox label={`${rep.name}, ${rep.party}`} />
    </Box>
  ));
  return <Text>{rs}</Text>;
};

export default props => {
  return (
    <DarkContainer>
      {!props.reps && <EmptyState />}
      {props.reps && <Reps reps={props.reps} />}
    </DarkContainer>
  );
};
