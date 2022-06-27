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

export default extendTheme({ styles, fonts });
