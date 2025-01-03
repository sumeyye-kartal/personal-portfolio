import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Projects() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div class="flex flex-col py-16 pr-32 pl-36">
      <div>
        <h2 class="text-5xl text-heroHeadersColor font-Inter font-semibold pb-6">
          Projects
        </h2>
      </div>
      <div class="flex gap-32">
        {data[language].project.projectsArray.map((item, index) => {
          return (
            <div key={index} class="flex flex-col gap-5">
              <img src={item.image} />
              <h3 class="font-Inter font-medium text-3xl text-projectsHeaderColor">
                {item.title}
              </h3>
              <p class="font-Inter font-normal text-sm text-paragraphsColor">
                {item.desc}
              </p>
              <div class="flex gap-1.5">
                {item.toolsArray.map((item, index) => {
                  return (
                    <p
                      class="border rounded py-1.5 px-5 font-Inter font-medium text-sm text-projectsButtonBorderColor bg-languageTextColor border-projectsButtonBorderColor"
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
