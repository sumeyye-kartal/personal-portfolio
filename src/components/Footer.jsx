import data from "../data.js";
import lightFinger from "/lightFinger.png";
import darkFinger from "/darkFinger.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Footer() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div class="flex flex-col w-full bg-footerBackgroundColor gap-10 phone:items-center justify-center desktop:h-96 desktop:pl-36">
      <div>
        <p class="font-Inter font-semibold text-heroHeadersColor phone:text-4xl tablet:text-4xl desktop:text-5xl">
          {data[language].footer.header1}
        </p>
        <p class="font-Inter font-semibold text-heroHeadersColor phone:text-4xl tablet:text-4xl desktop:text-5xl">
          {data[language].footer.header2}
        </p>
      </div>
      <div class="flex justify-between phone:flex-col phone:gap-5">
        <div class="flex items-center gap-2">
          <img
            class="w-5 bg-footerBackgroundColor"
            src={theme === "dark" ? darkFinger : lightFinger}
          />
          <a
            class="font-Inter font-medium text-xl underline text-emailColor"
            href="smyyekartal@outlook.com"
          >
            {data[language].footer.email}
          </a>
        </div>
        <div class="flex phone:justify-between desktop:mr-32 desktop:gap-5">
          <a
            class="font-Inter font-medium text-lg text-footerPersonalColor"
            href={data[language].footer.footerLinks[0].link}
          >
            {data[language].footer.footerLinks[0].title}
          </a>
          <a
            class="font-Inter font-medium text-lg text-footerGithubColor"
            href={data[language].footer.footerLinks[1].link}
          >
            {data[language].footer.footerLinks[1].title}
          </a>
          <a
            class="font-Inter font-medium text-lg text-footerLinkedinColor"
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
