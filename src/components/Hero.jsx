import data from "../data.js";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Hero() {
  const [ıshovered, setIsHovered] = useState(false);
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#252128" : "#ffffff",
      }}
      class="w-full flex justify-between items-center phone:flex-col phone:gap-4 tablet:flex-col tablet:gap-6 desktop:w-5/6"
    >
      <div class="flex flex-col phone:gap-2 phone:w-[350px] tablet:gap-4 tablet:w-[450px] desktop:gap-6 desktop:w-1/2">
        <div class="flex items-center">
          <img
            class="h-px w-24"
            src={
              theme === "dark"
                ? data[language].hero.lineDarkİmage
                : data[language].hero.lineLightİmage
            }
          />
          <p
            style={{ color: theme === "dark" ? "#B7AAFF" : "#4338CA" }}
            class="font-Inter"
          >
            {data[language].hero.name}
          </p>
        </div>
        <div class="flex flex-col phone:gap-2 tablet:gap-4 desktop:gap-6">
          <div class="desktop:text-7xl phone:text-5xl tablet:text-6xl font-Inter font-bold">
            <h1 style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}>
              {data[language].hero.header}
            </h1>
          </div>
          <p
            style={{ color: theme === "dark" ? "#FFFFFF" : "#6B7280" }}
            class="dekstop:text-xl phone:text-md tablet:text-lg font-Inter font-normal"
          >
            {data[language].hero.description}
          </p>
          <div class="flex phone:gap-2 tablet:gap-4 desktop:gap-6">
            <a
              style={{
                color: theme === "dark" ? "#E1E1FF" : "#3730A3",
                backgroundcolor: theme === "dark" ? "#383838" : "#FFFFFF",
                bordercolor: theme === "dark" ? "#E1E1FF" : "#3730A3",
              }}
              class="flex items-center justify-center border w-32 font-medium font-Inter phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
              href={data[language].hero.hireMeLink}
            >
              {data[language].hero.hireMe}
            </a>
            <a
              style={{
                color: theme === "dark" ? "#E1E1FF" : "#3730A3",
                backgroundcolor: theme === "dark" ? "#383838" : "#FFFFFF",
                bordercolor: theme === "dark" ? "#E1E1FF" : "#3730A3",
              }}
              class="flex items-center justify-center border w-32 font-medium font-Inter gap-2 phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
              href="https://github.com/sumeyye-kartal/"
            >
              <BsGithub class="text-3xl" />
              Github
            </a>
            <a
              style={{
                color: theme === "dark" ? "#E1E1FF" : "#3730A3",
                backgroundcolor: theme === "dark" ? "#383838" : "#FFFFFF",
                bordercolor: theme === "dark" ? "#E1E1FF" : "#3730A3",
              }}
              class="flex items-center justify-center border w-32 font-medium font-Inter gap-2 phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
              href=""
            >
              <FaLinkedinIn class="text-3xl" />
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center phone:w-[400px] tablet:w-[500px] desktop:w-1/2 desktop:justify-end">
        <img
          class="phone:w-[350px] phone:rounded-xl tablet:w-[450px] tablet:rounded-2xl desktop:max-w-[800px] desktop:max-h-[500px] desktop:rounded-3xl"
          src={data[language].hero.image}
        />
      </div>
    </div>
  );
}

export default Hero;
