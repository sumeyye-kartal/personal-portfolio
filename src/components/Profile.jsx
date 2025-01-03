import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data";
function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-10 items-start phone:items-center phone:w-[400px] tablet:w-[500px] desktop:w-5/6">
      <h2 className="phone:w-[350px] text-heroHeadersColor font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl">
        {data[language].profile.header}
      </h2>
      <div className="flex desktop:gap-32 phone:gap-10 phone:w-[350px] phone:flex-col pb-16 border-light-purple border-b">
        <div className="flex flex-col gap-5 desktop:w-1/3">
          <h3 className="text-2xl text-headersColor font-medium">
            {data[language].profile.header}
          </h3>
          {data[language].profile.infoArray.map((info, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <p className="text-profileTextColor font-semibold phone:w-[120px] desktop:w-[300px]">
                  {info.title}:
                </p>
                <p className="text-profileTextColor text-left phone:w-[220px] desktop:w-[400px] ">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 desktop:w-[500px]">
          <h3 className="text-2xl text-headersColor font-medium">
            {data[language].profile.aboutMe}
          </h3>
          <p className="text-paragraphsColor break-words desktop:w-[500px]">
            {data[language].profile.aboutMeDescOne} <br /> <br />
            {data[language].profile.aboutMeDescTwo}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
