import React from "react";
import Header from "../components/header/Header";

function MainLayout({ children }) {
	return (
		<React.Fragment>
			<Header></Header>
			<main>{children}</main>
		</React.Fragment>
	);
}

export default MainLayout;
