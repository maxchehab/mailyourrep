import { TabNavigation, Tab } from "evergreen-tabs";
import Box from "ui-box";
import Link from "next/link";

const TabLink = props => (
  <Link href={props.href}>
    <Tab isSelected={props.isSelected}>{props.children}</Tab>
  </Link>
);

export const pages = {
  INDEX: "INDEX",
  FAQ: "FAQ"
};

export const Navigation = ({ selected }) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <TabNavigation>
        <TabLink isSelected={selected === pages.INDEX} href="/">
          Home
        </TabLink>
        <TabLink isSelected={selected === pages.FAQ} href="/faq">
          FAQ
        </TabLink>
      </TabNavigation>
    </Box>
  );
};
