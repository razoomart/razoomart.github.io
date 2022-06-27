import {
	Box,
	Stack,
	Text,
	Button,
	Heading,
	Center,
	Link,
} from "@chakra-ui/react";
import LazyImage from "../LazyImage";
import logo from "../../images/logo.svg";
import { Link as RLink } from "react-router-dom";

export default function Header() {
	return (
		<Box w="100%" position="fixed" zIndex={100} paddingRight={[0, 20]}>
			<Box m="20px">
				<Stack direction="row" justifyContent="space-between">
					<Center>
						<Box
							bgColor="#201F1E"
							border="1px solid #000000"
							borderRadius="19000px"
							color="white"
							h="40px"
							w="140px"
							as={Stack}
							justifyContent="center"
						>
							<Center textAlign="center">
								<Text
									style={{
										fontSize: "16px",
										lineHeight: "100%",
										color: "#FFFFFF",
										fontStretch: "120",
										fontVariationSettings:
											"'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'opsz' 14",
									}}
								>
									Главная
								</Text>
							</Center>
						</Box>
					</Center>

					<Link as={RLink} to="/">
						<LazyImage draggable={false} src={logo} h="40px" w="140px" />
					</Link>
				</Stack>
			</Box>
		</Box>
	);
}
