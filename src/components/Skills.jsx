import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Skills() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#252128" : "#ffffff",
      }}
      class="flex flex-col gap-10 phone:w-[350px] tablet:w-[450px] desktop:w-5/6"
    >
      <h2
        style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}
        class="font-Inter font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl"
      >
        {data[language].skills.header}
      </h2>
      <div class="flex gap-10 phone:flex-col pb-16 border-light-purple border-b">
        {data[language].skills.array.map((item, index) => {
          return (
            <div class="">
              <h3
                style={{ color: theme === "dark" ? "#B7AAFF" : "#4338CA" }}
                class="font-Inter font-medium text-2xl"
              >
                {item.Title}
              </h3>
              <p
                style={{ color: theme === "dark" ? "#ffffff" : "#6B7280" }}
                class="font-Inter font-normal text-sm"
              >
                {item.Desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
