import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Skills />
			<Resume />
			<Testimonials />
			<Contact />
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
