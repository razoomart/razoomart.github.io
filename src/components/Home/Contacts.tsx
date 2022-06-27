import {
	Box,
	Text,
	Heading,
	Center,
	Stack,
	Button,
	Link,
	Icon,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { Link as RLink } from "react-router-dom";

export default function Contacts() {
	return (
		<Box>
			<Stack
				direction={["column", "row"]}
				spacing="15px"
				justifyContent="space-between"
			>
				<Heading
					fontWeight="480"
					fontSize={["45px", "60px"]}
					lineHeight={["62px", "77px"]}
					color="#1B1B1D"
				>
					Контакты
				</Heading>
				<Box>
					<Stack direction="column" spacing="20px">
						<Button
							bgColor="white"
							border="2.5px solid #FFFFFF"
							borderRadius="30px"
							w={["100%", "600px"]}
							h="100px"
							color="#201F1E"
							_hover={{
								bgColor: "#5DADFA",
								color: "white",
								borderColor: "#5DADFA",
								WebkitTransform: "scale(1.08)",
								MsTransform: "scale(1.08)",
								transform: "scale(1.08)",
								boxShadow: "0px 5px 100px rgba(0, 163, 255, 0.25)",
							}}
							justifyContent="start"
							as={RLink}
							to="/brief"
						>
							<Box paddingLeft={[5, 10]} paddingRight={[5, 10]} w="100%">
								<Stack w="100%" direction="row" justifyContent="space-between">
									<Text
										fontSize={["28px", "40px"]}
										fontWeight="480"
										lineHeight="90%"
									>
										Заполнить бриф
									</Text>
									<Center>
										<Icon w="28px" h="28px" as={Arrow} />
									</Center>
								</Stack>
							</Box>
						</Button>
						<Button
							bgColor="white"
							border="2.5px solid #FFFFFF"
							borderRadius="30px"
							w={["100%", "600px"]}
							h="100px"
							color="#201F1E"
							_hover={{
								bgColor: "#5DADFA",
								color: "white",
								borderColor: "#5DADFA",
								WebkitTransform: "scale(1.1)",
								MsTransform: "scale(1.1)",
								transform: "scale(1.1)",
								boxShadow: "0px 5px 100px rgba(0, 163, 255, 0.25)",
								textDecoration: "none",
							}}
							justifyContent="start"
							as={Link}
							href="https://t.me/razoomart"
							isExternal
						>
							<Box paddingLeft={[5, 10]} paddingRight={[5, 10]} w="100%">
								<Stack w="100%" direction="row" justifyContent="space-between">
									<Text
										fontSize={["28px", "40px"]}
										fontWeight="480"
										lineHeight="90%"
									>
										Написать в телеграм
									</Text>
									<Center>
										<Icon w="28px" h="28px" as={Arrow} />
									</Center>
								</Stack>
							</Box>
						</Button>
						<Button
							bgColor="white"
							border="2.5px solid #FFFFFF"
							borderRadius="30px"
							w={["100%", "600px"]}
							h="100px"
							color="#201F1E"
							_hover={{
								bgColor: "#5DADFA",
								color: "white",
								borderColor: "#5DADFA",
								WebkitTransform: "scale(1.1)",
								MsTransform: "scale(1.1)",
								transform: "scale(1.1)",
								boxShadow: "0px 5px 100px rgba(0, 163, 255, 0.25)",
								textDecoration: "none",
							}}
							justifyContent="start"
							as={Link}
							href="mailto:hey@razoom.art"
							isExternal
						>
							<Box paddingLeft={[5, 10]} paddingRight={[5, 10]} w="100%">
								<Stack w="100%" direction="row" justifyContent="space-between">
									<Text
										fontSize={["28px", "40px"]}
										fontWeight="480"
										lineHeight="90%"
									>
										hey@razoom.art
									</Text>
									<Center>
										<Icon w="28px" h="28px" as={Arrow} />
									</Center>
								</Stack>
							</Box>
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}
