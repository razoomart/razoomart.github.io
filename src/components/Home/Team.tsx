import { Box, Text, Heading, Center, Stack, Button } from "@chakra-ui/react";
import LazyImage from "../LazyImage";
import "../../css/team.css";

// Team
import Albina from "../../images/team/Albina.png";
import Artem from "../../images/team/Artem.png";
import Bogdan from "../../images/team/Bogdan.png";
import Ilana from "../../images/team/Ilana.png";
import Ilya from "../../images/team/Ilya.png";
import Vladimir from "../../images/team/Vladimir.png";
import Yanika from "../../images/team/Yanika.png";
import plus from "../../images/plus.svg";

import React from "react";
import { Link as RLink } from "react-router-dom";

export default function Team() {
	let slider: any = document.getElementById("items");
	let isDown: boolean = false;
	let startX: number;
	let scrollLeft: number;

	const setSlider = () => {
		slider = document.getElementById("items");
		slider.addEventListener("mousedown", (e: any) => {
			isDown = true;
			slider.classList.add("active");
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener("mouseleave", () => {
			isDown = false;
			slider.classList.remove("active");
		});
		slider.addEventListener("mouseup", () => {
			isDown = false;
			slider.classList.remove("active");
		});
		slider.addEventListener("mousemove", (e: any) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 1;
			slider.scrollLeft = scrollLeft - walk;
		});
	};

	React.useEffect(() => {
		try {
			setSlider();
		} catch {}
	});
	return (
		<Box>
			<Heading
				fontWeight="480"
				fontSize={["45px", "60px"]}
				lineHeight={["62px", "77px"]}
				color="#1B1B1D"
			>
				Наша команда
			</Heading>
			<Box paddingTop={5}>
				<Stack
					direction="row"
					cursor="grab"
					overflow="auto"
					overflowX="auto"
					spacing="20px"
					id="items"
					_active={{ cursor: "-webkit-grabbing" }}
				>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Artem} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Артём
									<br />
									Бергевич
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Арт-директор,
									<br />
									дизайнер
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Ilya} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Илья
									<br />
									Устинов
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Арт-директор,
									<br />
									технолог
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Albina} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="32px" lineHeight="90%">
									Альбина
									<br />
									Разумовская
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Дизайнерка
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Ilana} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Илана
									<br />
									Мизиева
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Дизайнерка
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Bogdan} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Богдан
									<br />
									Володин
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Технолог
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">ДАУН</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Кирилл
									<br />
									Персонов
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									Разработчик
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Vladimir} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Владимир
									<br />
									Лапский
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									iOS-разработчик
								</Text>
							</Box>
						</Box>
					</Box>
					<Box minH="300px" minW="230px" bgColor="white" borderRadius="25px">
						<Box m="20px">
							<Center h="144px">
								<LazyImage src={Yanika} draggable={false} w="100px" />
							</Center>
							<Box paddingTop={5}>
								<Heading fontWeight="480" fontSize="35px" lineHeight="90%">
									Яника
									<br />
									Устинова
								</Heading>
								<Text
									paddingTop={3}
									color="#201F1E99"
									fontSize="20px"
									lineHeight="110%"
									fontWeight="480"
								>
									3D-дизайнерка
								</Text>
							</Box>
						</Box>
					</Box>
					<Center>
						<Button
							minH="300px"
							minW="230px"
							bgColor="white"
							borderRadius="25px"
							textAlign="start"
							h="100%"
							_hover={{
								boxShadow: "0px 5px 100px rgba(0, 163, 255, 0.25)",
								bgColor: "white",
							}}
							as={RLink}
							to="/contacts"
						>
							<Box m="20px">
								<Center h="184px">
									<LazyImage src={plus} draggable={false} w="100px" />
								</Center>
								<Box paddingTop={5}>
									<Heading fontWeight="480" fontSize="28px" lineHeight="90%">
										Ищем таланты
									</Heading>
									<Text
										paddingTop={3}
										color="#201F1E99"
										fontSize="20px"
										lineHeight="110%"
										fontWeight="480"
									>
										Смотреть вакансии
									</Text>
								</Box>
							</Box>
						</Button>
					</Center>
					<Box />
				</Stack>
			</Box>
		</Box>
	);
}
