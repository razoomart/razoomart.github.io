import { extendTheme } from "@chakra-ui/react";
import "./css/theme.css";

const styles = {
	global: {
		body: {
			bg: "#F6F6F6",
		},
	},
};

const fonts = {
	heading: `'SF Text', sans-serif`,
	body: `'SF Text', sans-serif`,
};

const breakpoints = ["0em", "30em", "48em", "62em", "80em", "96em"];

export default extendTheme({ styles, fonts, breakpoints });
