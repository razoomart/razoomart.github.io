import { Box } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import Make from "../components/Home/Make";
import Cases from "../components/Home/Cases";
import How from "../components/Home/How";
import Team from "../components/Home/Team";
import Contacts from "../components/Home/Contacts";
import React from "react";

export default function Home() {
	React.useEffect(() => {
		document.title = "Главная - razoom.art";
	});
	return (
		<Box>
			<Box paddingBottom={[5, 10]} mr="20px" paddingRight={[0, 10]}>
				<Hero />
			</Box>
			<Box paddingBottom={[5, 10]} mr="20px" paddingRight={[0, 10]}>
				<Make />
			</Box>
			<Box
				paddingTop={5}
				paddingBottom={[5, 10]}
				mr="20px"
				paddingRight={[0, 10]}
			>
				<Cases />
			</Box>
			<Box
				paddingTop={5}
				paddingBottom={[5, 10]}
				mr="20px"
				paddingRight={[0, 10]}
			>
				<How />
			</Box>
			<Box paddingTop={5} paddingBottom={[5, 10]}>
				<Team />
			</Box>
			<Box paddingBottom={[5, 10]} mr="20px" paddingRight={[0, 10]}>
				<Contacts />
			</Box>
		</Box>
	);
}
