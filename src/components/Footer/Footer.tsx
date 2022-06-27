import {
	Box,
	Stack,
	Text,
	Link,
	Button,
	IconButton,
	Icon,
	Center,
} from "@chakra-ui/react";
import { ReactComponent as telegram } from "../../images/telegram.svg";
import { ReactComponent as behance } from "../../images/behance.svg";

export default function Footer() {
	return (
		<Box
			bgColor="#6D737D"
			minH="100px"
			border="1px solid #6D737D"
			borderRadius="30px"
			color="white"
		>
			<Box m="20px" ml={["20px", "40px"]} mr={["20px", "40px"]}>
				<Stack
					direction={["column", "row"]}
					spacing="15px"
					justifyContent="space-between"
				>
					<Stack direction="row" spacing="15px">
						<IconButton
							color="#1B1B1DCC"
							w="60px"
							h="60px"
							aria-label="Telegram"
							bgColor="#D6EDF0"
							borderRadius="9999px"
							icon={
								<Center>
									<Icon w="30px" h="24px" as={telegram} />
								</Center>
							}
							as={Link}
							href="https://t.me/razoomart"
							isExternal
						/>
						<IconButton
							color="#1B1B1DCC"
							w="60px"
							h="60px"
							aria-label="Behance"
							bgColor="#D6EDF0"
							borderRadius="9999px"
							icon={
								<Center>
									<Icon w="30px" h="24px" as={behance} />
								</Center>
							}
							as={Link}
							href="https://t.me/razoomart"
							isExternal
						/>
						<Button
							bgColor="#D6EDF0"
							borderRadius="9999px"
							minW="150px"
							minH="60px"
							color="#404547"
						>
							<Box m="10px">
								<Center>
									<Text fontWeight="480" fontSize="20px" lineHeight="27px">
										Вакансии
									</Text>
								</Center>
							</Box>
						</Button>
					</Stack>
					<Stack
						paddingTop={[5, 0]}
						justifyContent="space-between"
						direction={["row", "column"]}
						spacing={"10px"}
					>
						<Text fontSize="20px" fontWeight="480" lineHeight="27px">
							version 2.0
						</Text>
						<Text fontSize="20px" fontWeight="480" lineHeight="27px">
							2020 — ∞
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
}
