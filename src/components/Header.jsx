import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Header() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div class="w-full flex flex-col gap-4 phone:p-2 phone:text-[.6rem] tablet:p-2 tablet:text-[.8rem] desktop:p-4 desktop:w-5/6">
      <div class="flex justify-end phone:gap-2 desktop:gap-4">
        <button onClick={handleThemeChange}>
          <img
            class="phone:w-6 tablet:w-8 desktop:w-10"
            src={
              theme === "dark"
                ? data[language].header.themeDarkBtn
                : data[language].header.themeLightBtn
            }
          />
        </button>
        <p class="font-Inter font-bold text-base text-themeTextColor">
          {data[language].header.darkBtn}
        </p>
        <p class="font-Inter font-bold text-base text-themeTextColor">|</p>
        <button
          onClick={handleLanguageChange}
          class="font-Inter font-bold text-base text-themeTextColor"
        >
          <span class="font-Inter font-bold text-base text-languageSpanColor">
            {data[language].header.languageSpan}
          </span>
          {data[language].header.languageBtn}
        </button>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <img
            class="phone:w-10 tablet:w-12 desktop:w-14"
            src={
              theme === "dark"
                ? data[language].hero.logoDarkİmage
                : data[language].hero.logoLightİmage
            }
          />
        </div>
        <div class="flex text-lg text-paragraphsColor font-Inter phone:gap-4 tablet:gap-8 desktop:gap-12">
          {data[language].header.navArray.map((item, index) => {
            return (
              <a
                href={item.link}
                key={index}
                class="hover:border border border-white phone:rounded-sm phone:p-1 tablet:p-2 tablet:rounded-md desktop:p-3 desktop:rounded-md hover:border-buttonColor hover:border-solid hover:text-buttonColor"
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
