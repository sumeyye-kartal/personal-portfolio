import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Projects() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div class="flex flex-col gap-10 phone:items-center phone:w-[400px] tablet:w-[500px] desktop:w-5/6 ">
      <div>
        <h2 class="phone:w-[350px] text-heroHeadersColor font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl">
          Projects
        </h2>
      </div>
      <div class="flex desktop:gap-32 phone:gap-10 phone:w-[350px] phone:flex-col">
        {data[language].project.projectsArray.map((item, index) => {
          return (
            <div key={index} class="flex flex-col gap-5 desktop:w-1/3">
              <img src={item.image} />
              <h3 class="font-Inter font-medium text-2xl text-projectsHeaderColor">
                {item.title}
              </h3>
              <p class="font-Inter font-normal text-sm text-paragraphsColor">
                {item.desc}
              </p>
              <div class="flex gap-1.5">
                {item.toolsArray.map((item, index) => {
                  return (
                    <p
                      class="border rounded py-1.5 px-5 font-Inter font-medium text-sm text-projectsButtonBorderColor bg-languageTextColor border-projectsButtonBorderColor "
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
              <div class="flex justify-between underline font-Inter font-medium text-base text-buttonColor">
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
