import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Header() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#252128" : "#ffffff",
      }}
      class="w-full flex flex-col gap-4 phone:p-2 phone:text-[.6rem] tablet:p-2 tablet:text-[.8rem] desktop:p-4 desktop:w-5/6"
    >
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
        <p
          class="font-Inter font-bold text-base"
          style={{ color: theme === "dark" ? "#D9D9D9" : "#777777" }}
        >
          {data[language].header.darkBtn}
        </p>
        <p
          class="font-Inter font-bold text-base"
          style={{ color: theme === "dark" ? "#D9D9D9" : "#777777" }}
        >
          |
        </p>
        <button
          style={{ color: theme === "dark" ? "#D9D9D9" : "#777777" }}
          onClick={handleLanguageChange}
          class="font-Inter font-bold text-base"
        >
          <span
            style={{ color: theme === "dark" ? "#BAB2E7" : "#4731D3" }}
            class="font-Inter font-bold text-base"
          >
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
        <div class="flex text-lg text-br-grey font-Inter phone:gap-4 tablet:gap-8 desktop:gap-12">
          {data[language].header.navArray.map((item, index) => {
            return (
              <a
                href={item.link}
                key={index}
                class="hover:border border border-white phone:rounded-sm phone:p-1 tablet:p-2 tablet:rounded-md desktop:p-3 desktop:rounded-md hover:border-dark-blue hover:border-solid hover:text-dark-blue"
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
