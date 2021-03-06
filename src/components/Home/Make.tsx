import {
	Box,
	SimpleGrid,
	Text,
	Heading,
	Center,
	Stack,
} from "@chakra-ui/react";

interface CardInterface {
	color: string;
	name: string;
}

export default function Make() {
	const Card = (props: CardInterface) => (
		<Box
			bgColor={props.color}
			borderRadius="61.6658px"
			border={`1px solid ${props.color}`}
			minW="120px"
			h={["50px", "60px"]}
		>
			<Box m="10px">
				<Center>
					<Text
						color="rgba(27, 27, 29, 0.8)"
						fontSize={["20px", "24px"]}
						fontWeight="480"
						lineHeight="150%"
					>
						{props.name}
					</Text>
				</Center>
			</Box>
		</Box>
	);
	return (
		<Box>
			<Stack
				direction={["column", "row"]}
				justifyContent="space-between"
				spacing="5px"
			>
				<Heading
					fontWeight="480"
					fontSize={["45px", "80px"]}
					lineHeight="107px"
				>
					Делаем
				</Heading>

				<SimpleGrid columns={[2, 3, 4]} spacing="15px">
					<Card color="#E0D6F0" name="Брендинг" />
					<Card color="#D8F0D6" name="Интерфейсы" />
					<Card color="#F0E4D6" name="Сайты" />
					<Card color="#F0EDD6" name="Исследования" />
					<Card color="#D6EDF0" name="Запуск MVP" />
					<Card color="#ECD8D3" name="Гайдлайны" />
					<Card color="#DDE4F3" name="Разработка" />
					<Card color="#D8F0D6" name="No-code" />
				</SimpleGrid>
			</Stack>
		</Box>
	);
}
