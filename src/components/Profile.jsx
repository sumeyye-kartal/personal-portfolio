import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data";
function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div class="flex flex-col gap-10 items-start pb-16 border-light-purple border-b phone:items-center phone:w-[400px] tablet:w-[500px] desktop:w-5/6">
      <h2 class="phone:w-[350px] text-heroHeadersColor font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl">
        {data[language].profile.header}
      </h2>
      <div class="flex desktop:gap-32 phone:gap-10 phone:w-[350px] phone:flex-col">
        <div class="flex flex-col gap-5 desktop:w-1/3">
          <h3 class="text-2xl text-headersColor font-medium">
            {data[language].profile.header}
          </h3>
          {data[language].profile.infoArray.map((info, index) => {
            return (
              <div class="flex justify-between" key={index}>
                <p class="text-profileTextColor font-semibold text-ml phone:w-[120px] desktop:w-[300px]">
                  {info.title}:
                </p>
                <p class="text-profileTextColor text-left text-ml font-semibold phone:w-[220px] desktop:w-[400px] ">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
        <div class="flex flex-col gap-5 desktop:w-[500px]">
          <h3 class="text-2xl text-headersColor font-medium">
            {data[language].profile.aboutMe}
          </h3>
          <p class="text-paragraphsColor break-words desktop:w-[500px]">
            {data[language].profile.aboutMeDescOne} <br /> <br />
            {data[language].profile.aboutMeDescTwo}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
