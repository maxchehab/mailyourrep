import Letter from "./letter";
import glamorous from "glamorous";
import { Heading, Paragraph, Link as A } from "evergreen-typography";
import { spacing, textSizes, colors } from "../theme";
import Box from "ui-box";
import { Navigation } from "./navigation";
import { Card, HR } from "./ui";

export default ({ children, page }) => (
  <Card>
    <Box>
      {children}

      <HR />

      <Navigation selected={page} />
    </Box>
  </Card>
);
