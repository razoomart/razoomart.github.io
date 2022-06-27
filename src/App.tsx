import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Box, Container } from "@chakra-ui/react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Box paddingLeft={[0, 10]} paddingBottom={[0, 10]} paddingTop={2}>
				<Box paddingRight={[0, 10]}>
					<Header />
				</Box>

				<Box
					style={{
						paddingTop: "6rem",
					}}
					zIndex={99}
					ml="20px"
				>
					<Container
						maxW={["full", "full", "full", "full", "full", "7xl"]}
						paddingInlineStart={[0, 0, 0, "1rem", "1rem", "1rem"]}
						paddingInlineEnd={[0, 0, 0, "1rem", "1rem", "1rem"]}
					>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
						<Box mr="20px" paddingBottom={[5, 0]} paddingRight={[0, 10]}>
							<Footer />
						</Box>
					</Container>
				</Box>
			</Box>
		</BrowserRouter>
	);
}

export default App;
