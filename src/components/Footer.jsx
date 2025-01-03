import data from "../data.js";
import finger from "/finger.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Footer() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#141414" : "#F9F9F9",
      }}
      class="flex flex-col w-full h-96 py-16 pl-32 gap-14"
    >
      <div>
        <p
          style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}
          class="font-Inter text-5xl font-semibold"
        >
          {data[language].footer.header1}
        </p>
        <p
          style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}
          class="font-Inter text-5xl font-semibold"
        >
          {data[language].footer.header2}
        </p>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <img
            style={{
              backgroundColor: theme === "dark" ? "#141414" : "#F9F9F9",
            }}
            class="w-5"
            src={finger}
          />
          <a
            style={{ color: theme === "dark" ? "#BAB2E7" : "#AF0C48" }}
            class="font-Inter font-medium text-xl underline"
            href="smyyekartal@outlook.com"
          >
            {data[language].footer.email}
          </a>
        </div>
        <div class="flex mr-32 gap-5">
          <a
            style={{ color: theme === "dark" ? "#E1E1FF" : "#0A0A14" }}
            class="font-Inter font-medium text-lg"
            href={data[language].footer.footerLinks[0].link}
          >
            {data[language].footer.footerLinks[0].title}
          </a>
          <a
            style={{ color: theme === "dark" ? "#17D18B" : "#00AB6B" }}
            class="font-Inter font-medium text-lg"
            href={data[language].footer.footerLinks[1].link}
          >
            {data[language].footer.footerLinks[1].title}
          </a>
          <a
            style={{ color: theme === "dark" ? "#0BA6F6" : "#0077B5" }}
            class="font-Inter font-medium text-lg"
            href={data[language].footer.footerLinks[2].link}
          >
            {data[language].footer.footerLinks[2].title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
