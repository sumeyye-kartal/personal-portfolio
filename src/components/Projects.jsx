import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Projects() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#252128" : "#ffffff",
      }}
      class="flex flex-col py-16 pr-32 pl-36"
    >
      <div>
        <h2
          style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}
          class="text-5xl font-Inter font-semibold pb-6"
        >
          Projects
        </h2>
      </div>
      <div class="flex gap-32">
        {data[language].project.projectsArray.map((item, index) => {
          return (
            <div key={index} class="flex flex-col gap-5">
              <img src={item.image} />
              <h3
                style={{ color: theme === "dark" ? "#CFCBFF" : "#4338CA" }}
                class="font-Inter font-medium text-3xl"
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: theme === "dark" ? "#FFFFFF" : "#6B7280",
                }}
                class="font-Inter font-normal text-sm"
              >
                {item.desc}
              </p>
              <div class="flex gap-1.5">
                {item.toolsArray.map((item, index) => {
                  return (
                    <p
                      style={{
                        color: theme === "dark" ? "#8F88FF" : "#3730A3",
                        backgroundcolor:
                          theme === "dark" ? "#383838" : "#FFFFFF",
                        bordercolor: theme === "dark" ? "#8F88FF" : "#3730A3",
                      }}
                      class="border rounded py-1.5 px-5 font-Inter font-medium text-sm "
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
              <div
                style={{
                  color: theme === "dark" ? "#E1E1FF" : "#3730A3",
                }}
                class="flex justify-between underline font-Inter font-medium text-base"
              >
                <a href={item.githubLink}>{item.github}</a>
                <a href={item.viewLink}>{item.view}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
