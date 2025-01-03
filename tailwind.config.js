/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      
      colors: {
        "dark-blue":" #3730A3",
        "br-grey" : "#6B7280",
        "middle-blue": "#4338CA",
        "black":"#1F2937",
        "black-bl":"#OAOA14",
        "light-grey":"#777777",
        "light-blue":"#4731D3",
        "light-purple" : "#BAB2E7",
        bodyBackgroundColor: "var(--bodyBackgroundColor)",
        footerBackgroundColor: "var(--footerBackgroundColor)",
        themeTextColor: "var(--themeTextColor)",
        languageSpanColor: "var(--languageSpanColor)",
        buttonColor: "var(--buttonColor)",
        buttonHoverTextColor: "var(--buttonHoverTextColor)",
        heroHeadersColor: "var(--heroHeadersColor)",
        headersColor: "var(--headersColor)",
        profileTextColor: "var(--profileTextColor)",
        paragraphsColor: "var(--paragraphsColor)",
        projectsHeaderColor: "var(--projectsHeaderColor)",
        projectsButtonBackgroundColor: "var(--projectsButtonBackgroundColor)",
        projectsButtonBorderColor: "var(--projectsButtonBorderColor)",
        projectsButtonColor: "var(--projectsButtonColor)",
        projectsLinksColor: "var(--projectsLinksColor)",
        emailColor: "var(--emailColor)",
        footerPersonalColor: "var(--footerPersonalColor)",
        footerGithubColor: "var(--footerGithubColor)",
        footerLinkedinColor: "var(--footerLinkedinColor)"
        
      },
      fontFamily: {
        "Inter": ["Inter"]
      },
      fontSize : {
        "5xl":"42px"
      }
    },
    screens: {
      phone: {max: "400px"},
      tablet: {min: "401px", max: "1024px"},
      desktop: {min: "1024px"}
    }
  },
  plugins: [],
}