import { Box, SimpleGrid, Text, Heading, Stack, Icon } from "@chakra-ui/react";
import { ReactComponent as icon_one } from "../../images/1.svg";
import { ReactComponent as icon_two } from "../../images/2.svg";
import { ReactComponent as icon_three } from "../../images/3.svg";
import { ReactComponent as icon_four } from "../../images/4.svg";
import { MobileView, BrowserView } from "react-device-detect";

export default function How() {
	return (
		<Box>
			<Heading
				fontWeight="480"
				fontSize={["45px", "60px"]}
				lineHeight={["47px", "77px"]}
			>
				Как мы работаем
			</Heading>
			<Box paddingTop={10}>
				<SimpleGrid columns={[1, 2]} spacing={["15px", "25px"]}>
					<Box
						minH="200px"
						maxH={["auto", "240px"]}
						bgColor="white"
						borderRadius={["25px", "40px"]}
					>
						<Box m="25px" paddingBottom={[0, 5]}>
							<BrowserView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_one} w="60px" h="60px" />
									</Box>
									<Box>
										<Stack direction="column" spacing="20px">
											<Heading
												color="#201F1E"
												fontSize={["25px", "35px"]}
												lineHeight="100%"
												fontWeight="480"
											>
												Создание и запуск с нуля продукта (или MVP)
											</Heading>
											<Text
												color="rgba(32, 31, 30, 0.8)"
												fontWeight="480"
												fontSize="20px"
												lineHeight="130%"
											>
												Проведём исследования, нарисуем интерфейсы, отправим в
												продакшн или разработаем сами
											</Text>
										</Stack>
									</Box>
								</Stack>
							</BrowserView>
							<MobileView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_one} w="60px" h="60px" />
									</Box>
									<Heading
										color="#201F1E"
										fontSize={["25px", "35px"]}
										lineHeight="100%"
										fontWeight="480"
									>
										Создание и запуск с нуля продукта (или MVP)
									</Heading>
								</Stack>
								<Box paddingTop="20px" w="100%">
									<Stack direction="column" spacing="20px">
										<Text
											color="rgba(32, 31, 30, 0.8)"
											fontWeight="480"
											fontSize="20px"
											lineHeight="130%"
										>
											Проведём исследования, нарисуем интерфейсы, отправим в
											продакшн или разработаем сами
										</Text>
									</Stack>
								</Box>
							</MobileView>
						</Box>
					</Box>
					<Box
						minH="200px"
						maxH={["auto", "240px"]}
						bgColor="white"
						borderRadius={["25px", "40px"]}
					>
						<Box m="25px" paddingBottom={[0, 5]}>
							<BrowserView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_two} w="60px" h="60px" />
									</Box>
									<Box>
										<Stack direction="column" spacing="20px">
											<Heading
												color="#201F1E"
												fontSize={["25px", "35px"]}
												lineHeight="100%"
												fontWeight="480"
											>
												Индивидуальная разработка
											</Heading>
											<Text
												color="rgba(32, 31, 30, 0.8)"
												fontWeight="480"
												fontSize="20px"
												lineHeight="130%"
											>
												Вместе с Вами придумаем и реализуем любые нестандартные
												решения
											</Text>
										</Stack>
									</Box>
								</Stack>
							</BrowserView>
							<MobileView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_two} w="60px" h="60px" />
									</Box>
									<Heading
										color="#201F1E"
										fontSize={["25px", "35px"]}
										lineHeight="100%"
										fontWeight="480"
									>
										Индивидуальная разработка
									</Heading>
								</Stack>
								<Box paddingTop="20px">
									<Stack direction="column" spacing="20px">
										<Text
											color="rgba(32, 31, 30, 0.8)"
											fontWeight="480"
											fontSize="20px"
											lineHeight="130%"
										>
											Вместе с Вами придумаем и реализуем любые нестандартные
											решения
										</Text>
									</Stack>
								</Box>
							</MobileView>
						</Box>
					</Box>
					<Box
						minH="200px"
						maxH={["auto", "240px"]}
						bgColor="white"
						borderRadius={["25px", "40px"]}
					>
						<Box m="25px" paddingBottom={[0, 5]}>
							<BrowserView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_three} w="60px" h="60px" />
									</Box>
									<Box>
										<Stack direction="column" spacing="20px">
											<Heading
												color="#201F1E"
												fontSize={["25px", "35px"]}
												lineHeight="100%"
												fontWeight="480"
											>
												Дизайн-поддержка
											</Heading>
											<Text
												color="rgba(32, 31, 30, 0.8)"
												fontWeight="480"
												fontSize="20px"
												lineHeight="130%"
											>
												Станем вашей полноценной дизайн-командой, чтобы улучшать
												и поддерживать существующий продукт
											</Text>
										</Stack>
									</Box>
								</Stack>
							</BrowserView>
							<MobileView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_three} w="60px" h="60px" />
									</Box>
									<Heading
										color="#201F1E"
										fontSize={["25px", "35px"]}
										lineHeight="100%"
										fontWeight="480"
									>
										Дизайн-поддержка
									</Heading>
								</Stack>
								<Box paddingTop="20px">
									<Stack direction="column" spacing="20px">
										<Text
											color="rgba(32, 31, 30, 0.8)"
											fontWeight="480"
											fontSize="20px"
											lineHeight="130%"
										>
											Станем вашей полноценной дизайн-командой, чтобы улучшать и
											поддерживать существующий продукт
										</Text>
									</Stack>
								</Box>
							</MobileView>
						</Box>
					</Box>
					<Box
						minH="200px"
						maxH={["auto", "240px"]}
						bgColor="white"
						borderRadius={["25px", "40px"]}
					>
						<Box m="25px" paddingBottom={[0, 5]}>
							<BrowserView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_four} w="60px" h="60px" />
									</Box>
									<Box>
										<Stack direction="column" spacing="20px">
											<Heading
												color="#201F1E"
												fontSize={["25px", "35px"]}
												lineHeight="100%"
												fontWeight="480"
											>
												Аутстафф дизайнеров
											</Heading>
											<Text
												color="rgba(32, 31, 30, 0.8)"
												fontWeight="480"
												fontSize="20px"
												lineHeight="130%"
											>
												Встроимся в Вашу дизайн-команду для быстрого решения
												насущных проблем
											</Text>
										</Stack>
									</Box>
								</Stack>
							</BrowserView>
							<MobileView>
								<Stack direction="row" spacing="25px">
									<Box>
										<Icon as={icon_four} w="60px" h="60px" />
									</Box>
									<Heading
										color="#201F1E"
										fontSize={["25px", "35px"]}
										lineHeight="100%"
										fontWeight="480"
									>
										Аутстафф дизайнеров
									</Heading>
								</Stack>
								<Box paddingTop="20px">
									<Stack direction="column" spacing="20px">
										<Text
											color="rgba(32, 31, 30, 0.8)"
											fontWeight="480"
											fontSize="20px"
											lineHeight="130%"
										>
											Встроимся в Вашу дизайн-команду для быстрого решения
											насущных проблем
										</Text>
									</Stack>
								</Box>
							</MobileView>
						</Box>
					</Box>
				</SimpleGrid>
			</Box>
		</Box>
	);
}
