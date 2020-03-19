import { createGlobalStyle } from "styled-components";
import normalizeCSS from "!!raw-loader!./normalize.css";
import { typography } from "../style-guide/typography";

export const GlobalStyles = createGlobalStyle`
	${normalizeCSS}
	
	html {
		box-sizing: border-box;
		height: 100%;
	}
	
	*, *::before, *::after {
		box-sizing: inherit;
	}
	
	body {
	  margin: 0;
	  height: 100%;
	  color: #333;
	}
	
	input,textarea {
	  color: #333;
	}
	
	${typography}
`;
