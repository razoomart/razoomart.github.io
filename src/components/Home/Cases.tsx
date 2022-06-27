import {
	Box,
	Text,
	Heading,
	Stack,
	Container,
	Link,
	Button,
} from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import LazyImage from "../LazyImage";
import { Link as RLink, useNavigate } from "react-router-dom";
import bequick from "../../images/cases/desktop/bequick.png";
import hotline from "../../images/cases/desktop/hotline.png";
import ndafreseasrch from "../../images/cases/desktop/ndafreseasrch.png";
import pn from "../../images/cases/desktop/pn.png";
import spbedu from "../../images/cases/desktop/spbedu.png";
import mbequick from "../../images/cases/mobile/bequick.png";
import mhotline from "../../images/cases/mobile/hotline.png";
import mndafreseasrch from "../../images/cases/mobile/ndafreseasrch.png";
import mpn from "../../images/cases/mobile/pn.png";
import mspbedu from "../../images/cases/mobile/spbedu.png";

export default function Cases() {
	let navigate: any = useNavigate();
	const Case = (props: any) => (
		<Box>
			<BrowserView>
				{(!props.to && (
					<Box
						bgColor="white"
						minH="300px"
						borderRadius="25px"
						border="1px solid #FFFFFF"
					>
						<Box>
							<LazyImage
								borderTopRadius="25px"
								borderBottomRadius="25px"
								draggable={false}
								src={props.image}
								w="1200px"
							/>
						</Box>
						<Box m="30px" mt="25px">
							{(!props.add && (
								<Heading
									color="#201F1E"
									fontWeight="480"
									fontSize="30px"
									lineHeight="39px"
								>
									{props.name}
								</Heading>
							)) || (
								<Heading
									color="#201F1E"
									fontWeight="480"
									fontSize="25px"
									lineHeight="24px"
								>
									{props.name}{" "}
									<Link
										color="#201F1E80"
										_hover={{ cursor: "text", textDecoration: "none" }}
									>
										— {props.add}
									</Link>
								</Heading>
							)}
							<Text
								paddingTop={3}
								color="rgba(32, 31, 30, 0.8)"
								fontWeight="400"
								fontSize="17px"
								lineHeight="21px"
							>
								{props.desc}
							</Text>
						</Box>
					</Box>
				)) || (
					<Box
						bgColor="white"
						minH="300px"
						borderRadius="25px"
						border="1px solid #FFFFFF"
						onClick={() => {
							navigate(props.to);
						}}
						cursor="pointer"
					>
						<Box>
							<LazyImage
								borderTopRadius="25px"
								borderBottomRadius="25px"
								draggable={false}
								src={props.image}
								w="1200px"
							/>
						</Box>
						<Box m="30px" mt="25px">
							{(!props.add && (
								<Heading
									color="#201F1E"
									fontWeight="480"
									fontSize="30px"
									lineHeight="39px"
								>
									{props.name}
								</Heading>
							)) || (
								<Heading
									color="#201F1E"
									fontWeight="480"
									fontSize="25px"
									lineHeight="24px"
								>
									{props.name}{" "}
									<Link
										color="#201F1E80"
										_hover={{ cursor: "text", textDecoration: "none" }}
									>
										— {props.add}
									</Link>
								</Heading>
							)}
							<Text
								paddingTop={3}
								color="rgba(32, 31, 30, 0.8)"
								fontWeight="400"
								fontSize="17px"
								lineHeight="21px"
							>
								{props.desc}
							</Text>
						</Box>
					</Box>
				)}
			</BrowserView>
			<MobileView>
				{(!props.to && (
					<Box>
						<Box>
							<LazyImage
								draggable={false}
								src={props.mimage}
								w="330px"
								h="200px"
							/>
						</Box>

						<Box
							minH="147px"
							bgColor="white"
							borderRadius="20px"
							border="1px solid #FFFFFF"
						>
							<Box m="20px" mt="25px">
								{(!props.add && (
									<Heading
										color="#201F1E"
										fontWeight="480"
										fontSize="26px"
										lineHeight="30px"
									>
										{props.name}
									</Heading>
								)) || (
									<Heading
										color="#201F1E"
										fontWeight="480"
										fontSize="26px"
										lineHeight="30px"
									>
										{props.name}{" "}
										<Link
											color="#201F1E80"
											_hover={{ cursor: "text", textDecoration: "none" }}
										>
											— {props.add}
										</Link>
									</Heading>
								)}
								<Text
									paddingTop={5}
									color="rgba(32, 31, 30, 0.8)"
									fontWeight="400"
									fontSize="16px"
									lineHeight="120%"
								>
									{props.desc}
								</Text>
							</Box>
						</Box>
					</Box>
				)) || (
					<Box
						onClick={() => {
							navigate(props.to);
						}}
					>
						<Box>
							<LazyImage
								draggable={false}
								src={props.mimage}
								w="330px"
								h="200px"
							/>
						</Box>

						<Box
							minH="147px"
							bgColor="white"
							borderRadius="20px"
							border="1px solid #FFFFFF"
						>
							<Box m="20px" mt="25px">
								{(!props.add && (
									<Heading
										color="#201F1E"
										fontWeight="480"
										fontSize="26px"
										lineHeight="30px"
									>
										{props.name}
									</Heading>
								)) || (
									<Heading
										color="#201F1E"
										fontWeight="480"
										fontSize="26px"
										lineHeight="30px"
									>
										{props.name}{" "}
										<Link
											color="#201F1E80"
											_hover={{ cursor: "text", textDecoration: "none" }}
										>
											— {props.add}
										</Link>
									</Heading>
								)}
								<Text
									paddingTop={5}
									color="rgba(32, 31, 30, 0.8)"
									fontWeight="400"
									fontSize="16px"
									lineHeight="120%"
								>
									{props.desc}
								</Text>
							</Box>
						</Box>
					</Box>
				)}
			</MobileView>
		</Box>
	);

	return (
		<Box w="full">
			<Container maxW="2xl">
				<Stack direction="column" spacing="20px">
					<Case
						name="Исследование заказа еды"
						add="NDA"
						desc="Исследовение, дневники и CJM для сервиса доставки еды / 2022"
						image={ndafreseasrch}
						mimage={mndafreseasrch}
					/>
					<Case
						name="Hotline"
						add="облачный хостинг"
						desc="Брендинг, айдентика, дизайн сайта / 2022"
						image={hotline}
						mimage={mhotline}
						to="/case/hotline"
					/>
					<Case
						name="Петербургская Недвижимость"
						add="редизайн сайта"
						desc="Исследование, дизайн-система, поддержка / СКОРО"
						image={pn}
						mimage={mpn}
					/>
					<Case
						name="Электронный дневник Петербурга"
						add="NDA"
						desc="Тендерный концепт будущего мобильного приложения / 2020"
						image={spbedu}
						mimage={mspbedu}
					/>
					<Case
						name="Bequick"
						add="курьерская служба"
						desc="Брендинг, айдентика / 2021"
						image={bequick}
						mimage={mbequick}
					/>
				</Stack>
				<Box paddingTop={[5, 10]}>
					<Button
						bgColor="#F6F6F6"
						w="100%"
						border="2px solid #000000"
						borderRadius="999px"
						minH="110px"
						color="black"
						_hover={{
							color: "white",
							bgColor: "#1B1B1D",
							borderColor: "#1B1B1D",
							WebkitTransform: "scale(1.1)",
							MsTransform: "scale(1.1)",
							transform: "scale(1.1)",
							boxShadow:
								"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
						}}
						as={RLink}
						to="/cases"
					>
						<Text fontSize="30px" lineHeight="40px" fontWeight="400">
							смотреть все кейсы
						</Text>
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
