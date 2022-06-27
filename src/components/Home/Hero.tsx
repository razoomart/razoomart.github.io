import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Center,
  Icon,
} from "@chakra-ui/react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

export default function Hero() {
  return (
    <Box border="1px solid #D6EDF0" bgColor="#D6EDF0" borderRadius="40px">
      <Box m={["20px", "40px"]}>
        <Box>
          <Stack
            direction={["column", "row"]}
            spacing="15px"
            justifyContent="space-between"
          >
            <Heading
              maxW={["100%", "300px"]}
              color="#1B1B1D"
              fontSize={["35px", "60px"]}
              fontWeight="480"
              lineHeight="100%"
            >
              Разумный дизайн
            </Heading>
            <Center paddingTop={[10, 0]}>
              <Button
                bgColor="#D6EDF0"
                border="2.5px solid rgba(27, 27, 29, 0.7)"
                borderRadius="999px"
                w={["100%", "400px"]}
                h="100px"
                color="#535A5C"
                _hover={{
                  bgColor: "#5DADFA",
                  color: "white",
                  borderColor: "#5DADFA",
                  WebkitTransform: "scale(1.1)",
                  MsTransform: "scale(1.1)",
                  transform: "scale(1.1)",
                  boxShadow: "0px 5px 100px rgba(0, 163, 255, 0.25)",
                }}
              >
                <Box>
                  <Stack direction="row" spacing="20px">
                    <Text fontSize="27px" fontWeight="480" lineHeight="100%">
                      Работать с нами
                    </Text>
                    <Center>
                      <Icon w="28px" h="28px" as={Arrow} />
                    </Center>
                  </Stack>
                </Box>
              </Button>
            </Center>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
