import Box from "ui-box";
import { Label, Heading } from "evergreen-typography";

import { spacing, textSizes, colors } from "../theme";
import Description from "./description";
import glamorous from "glamorous";
import { borderRadius } from "ui-box/lib/enhancers";
import { Button } from "evergreen-buttons";
import { letter } from "../redux/selectors";
import { connect } from "react-redux";
import { FormGroup, FormLabel, FormTextarea, FormTextInput } from "./forms";
import {
  setName,
  setAddress,
  setMessage,
  sendLetter,
  lookupReps
} from "../redux/actions/index";
import Reps from "./reps";

const value = event => event.target.value;

const mapStateToProps = state => {
  return letter(state);
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: e => dispatch(setName(value(e))),
    changeAddress: e => dispatch(setAddress(value(e))),
    changeMessage: e => dispatch(setMessage(value(e))),
    sendLetter: () => dispatch(sendLetter()),
    lookupReps: () => dispatch(lookupReps())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    name,
    address,
    message,
    reps,
    changeName,
    changeAddress,
    changeMessage,
    sendLetter,
    lookupReps
  }) => (
    <Box>
      <Heading size={textSizes.large}>Send a letter</Heading>

      <FormGroup>
        <FormLabel htmlFor={"address"}>Mailing Address</FormLabel>
        <Description>
          We'll use this to look up your representative.
        </Description>
        <FormTextInput
          id={"address"}
          placeholder={"1600 Pennsylvania Ave NW, Washington, DC"}
          value={address}
          onChange={changeAddress}
          onBlur={lookupReps}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Representatives</FormLabel>
        <Description>
          We pick these members based on your congressional district.
        </Description>
        <Reps reps={reps} />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor={"name"}>Your Name</FormLabel>
        <FormTextInput
          id={"name"}
          placeholder={"Ada Lovelace"}
          value={name}
          onChange={changeName}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor={"letter"}>Write your letter!</FormLabel>
        <Description>
          Feel to leave the page, we'll save your progress.
        </Description>
        <FormTextarea
          id={"letter"}
          placeholder={"I'm writing to ask you to..."}
          value={message}
          onChange={changeMessage}
          style={{ resize: "none" }}
        />
      </FormGroup>

      <FormGroup>
        <Button onClick={sendLetter} disabled={!(name && message && address)}>
          {"Send!"}
        </Button>
      </FormGroup>
    </Box>
  )
);
