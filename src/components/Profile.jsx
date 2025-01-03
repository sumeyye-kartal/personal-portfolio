import data from "../data.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Profile() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#252128" : "#ffffff",
      }}
      class="flex flex-col pl-36 pr-40"
    >
      <div class="flex ">
        <h2
          style={{ color: theme === "dark" ? "#AEBCCF" : "#1F2937" }}
          class="desktop:text-5xl font-Inter font-semibold pb-6"
        >
          {data[language].profile.header}
        </h2>
      </div>
      <div class="flex gap-20 pb-16 border-b border-light-purple">
        <div class="flex flex-col">
          <div>
            <h3
              style={{ color: theme === "dark" ? "#B7AAFF" : "#4338CA" }}
              class="font-Inter desktop:text-3xl font-medium pb-6"
            >
              {data[language].profile.header}
            </h3>
          </div>
          <div class="flex gap-20">
            <div class="flex flex-col gap-2.5 font-Inter font-semibold text-black text-lg w-40 h-44">
              {data[language].profile.infoArray.map((item, index) => {
                return (
                  <p
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#000000" }}
                    key={index}
                  >
                    {item.title}
                  </p>
                );
              })}
            </div>
            <div class="flex flex-col gap-2.5 font-Inter font-normal text-black text-lg w-60 h-44">
              {data[language].profile.infoArray.map((item, index) => {
                return (
                  <p
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#000000" }}
                    key={index}
                  >
                    {item.value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div class="w-2/4 h-44">
          <h3
            style={{ color: theme === "dark" ? "#B7AAFF" : "#4338CA" }}
            class="font-Inter text-3xl text-middle-blue font-medium pb-6"
          >
            {data[language].profile.aboutMe}
          </h3>
          <p
            style={{ color: theme === "dark" ? "#ffffff" : "#6B7280" }}
            class="font-Inter text-lg text-br-grey font-normal pb-6"
          >
            {data[language].profile.aboutMeDesc1}
          </p>

          <p
            style={{ color: theme === "dark" ? "#ffffff" : "#6B7280" }}
            class="font-Inter text-lg text-br-grey font-normal pb-6"
          >
            {data[language].profile.aboutMeDesc2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
