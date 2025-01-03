import data from "../data.js";
import finger from "/finger.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Footer() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div class="flex flex-col w-full h-96 py-16 pl-32 gap-14 bg-footerBackgroundColor">
      <div>
        <p class="font-Inter text-5xl font-semibold text-heroHeadersColor">
          {data[language].footer.header1}
        </p>
        <p class="font-Inter text-5xl font-semibold text-heroHeadersColor">
          {data[language].footer.header2}
        </p>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <img class="w-5 bg-footerBackgroundColor" src={finger} />
          <a
            class="font-Inter font-medium text-xl underline text-emailColor"
            href="smyyekartal@outlook.com"
          >
            {data[language].footer.email}
          </a>
        </div>
        <div class="flex mr-32 gap-5">
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
