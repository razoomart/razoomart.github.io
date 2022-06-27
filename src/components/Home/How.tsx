import { Box, SimpleGrid, Text, Heading, Stack, Icon } from "@chakra-ui/react";
import { ReactComponent as icon_one } from "../../images/1.svg";
import { ReactComponent as icon_two } from "../../images/2.svg";
import { ReactComponent as icon_three } from "../../images/3.svg";
import { ReactComponent as icon_four } from "../../images/4.svg";

export default function How() {
  return (
    <Box>
      <Heading
        fontWeight="480"
        fontSize={["45px", "60px"]}
        lineHeight={["62px", "77px"]}
      >
        Как мы работаем
      </Heading>
      <Box paddingTop={5}>
        <SimpleGrid columns={[1, 2]} spacing="25px">
          <Box
            minH="200px"
            maxH={["auto", "240px"]}
            bgColor="white"
            borderRadius="40px"
          >
            <Box m="25px" paddingBottom={5}>
              <Stack direction="row" spacing="25px">
                <Box>
                  <Icon as={icon_one} w="60px" h="60px" />
                </Box>
                <Box>
                  <Stack direction="column" spacing="20px">
                    <Heading
                      color="#201F1E"
                      fontSize={["30px", "35px"]}
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
            </Box>
          </Box>
          <Box
            minH="200px"
            maxH={["auto", "240px"]}
            bgColor="white"
            borderRadius="40px"
          >
            <Box m="25px" paddingBottom={5}>
              <Stack direction="row" spacing="25px">
                <Box>
                  <Icon as={icon_two} w="60px" h="60px" />
                </Box>
                <Box>
                  <Stack direction="column" spacing="20px">
                    <Heading
                      color="#201F1E"
                      fontSize={["30px", "35px"]}
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
            </Box>
          </Box>
          <Box
            minH="200px"
            maxH={["auto", "240px"]}
            bgColor="white"
            borderRadius="40px"
          >
            <Box m="25px" paddingBottom={5}>
              <Stack direction="row" spacing="25px">
                <Box>
                  <Icon as={icon_three} w="60px" h="60px" />
                </Box>
                <Box>
                  <Stack direction="column" spacing="20px">
                    <Heading
                      color="#201F1E"
                      fontSize={["30px", "35px"]}
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
                      Станем вашей полноценной дизайн-командой, чтобы улучшать и
                      поддерживать существующий продукт
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box
            minH="200px"
            maxH={["auto", "240px"]}
            bgColor="white"
            borderRadius="40px"
          >
            <Box m="25px" paddingBottom={5}>
              <Stack direction="row" spacing="25px">
                <Box>
                  <Icon as={icon_four} w="60px" h="60px" />
                </Box>
                <Box>
                  <Stack direction="column" spacing="20px">
                    <Heading
                      color="#201F1E"
                      fontSize={["30px", "35px"]}
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
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
