
import projectOne from "/projectOne.png";
import projectTwo from "/projectTwo.png";
import projectThree from "/projectThree.png";
import imageOne from "/imageOne.png";
import darkLine from "/strokeDark.png";
import lightLine from "/strokeLight.png";
import logoDark from "/logoDark.png";
import logoLight from "/logoLight.png";
import themeDarkBtn from "/themeBtnDark.png";
import themeLightBtn from "/themeBtnLight.png";


const LanguagesData = {
    tr: {
        
        header: {
        themeDarkBtn : themeDarkBtn,
        themeLightBtn : themeLightBtn,    
        darkBtn: "KARANLIK TEMA",
        lightBtn: "AYDINLIK TEMA",
        languageSpan: "İNGİLİZCE",
        languageBtn: "'YE GEÇ",
        navArray: [
            { title: "Yetenekler", link: "#skills" },
            { title: "Projeler", link: "#projects" },
            { title: "Beni İşe Al", link: "" },
        ],
    },

    hero: {
        lineDarkİmage: darkLine,
        lineLightİmage: lightLine,
        logoDarkİmage: logoDark,
        logoLightİmage: logoLight,
        image: imageOne,
        header: "Yaratıcı düşünür Minimalizm aşığı",
        name: "Sümeyye Kartal",
        description: "Merhaba, Ben Sümeyye. Ben Web Geliştirme uzmanıyım. Harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir ön yüz ürünleri tasarlayacak bir Geliştirici arıyorsanız. Hadi benimle el sıkışalım.",
        hireMe: "Beni İşe Al",
        hireMeLink: ""
    },

    skills: {
        header: "Yetenekler",
        array: [
            { Title: "JavaScript", Desc: "İstisnai olarak, bazı durumlarda aşırıya kaçmamak, iş id est emekten vazgeçmek için resmi olarak kusurlu olmak."},
            { Title: "React.Js", Desc: "İstisnai olarak, bazı durumlarda aşırıya kaçmamak, iş id est emekten vazgeçmek için resmi olarak kusurlu olmak."},
            { Title: "Node.Js", Desc: "İstisnai olarak, bazı durumlarda aşırıya kaçmamak, iş id est emekten vazgeçmek için resmi olarak kusurlu olmak."},
        ],
    },

    profile: {
        header: "Profil",
        aboutMe: "Hakkımda",
        aboutMeDescOne: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        aboutMeDescTwo: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        infoArray: [
            { title: "Doğum Tarihi", value: "18.04.1992" },
            { title: "İkamet Şehri", value: "İstanbul" },
            { title: "Eğitim Durumu", value: "İstanbul Üni. Matematik Lisans, 2022" },
            { title: "Tercih Ettiği Rol", value: "Frontend, UI"},
        ],
    },

    project: {
        header: "Projeler",
        projectsArray: [
            { title: "Witflix",
              desc: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
              github: "Github",
              view: "Siteyi Görüntüle",
              githubLink: "https://github.com/sumeyye-kartal/witflix",
              viewLink: "",
              toolsArray: ["HTML", "CSS", "React"],
              image: projectOne

            },
            {
                title: "Pizza Projesi",
                desc: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
                github: "Github",
                view: "Siteyi Görüntüle",
                githubLink: "https://github.com/Workintech/fsweb-s8-challenge-pizza",
                viewLink: "",
                toolsArray: ["HTML", "CSS", "React"],
                image: projectTwo
            },
            {
                title: "Restaurant Menu",
                desc: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
                github: "Github",
                view: "Siteyi Görüntüle",
                githubLink: "https://github.com/sumeyye-kartal/restaurant-menu",
                viewLink: "",
                toolsArray: ["HTML", "CSS", "React"],
                image: projectThree
            },
        ],
    },

    footer: {
        header1: "Bir sonraki ürününüz üzerinde",
        header2: "birlikte çalışalım.",
        email: "smyyekartal@outlook.com",
        footerLinks: [
            { title: "Personal Blog", link: "" },
            { title: "Github", link: "https://github.com/sumeyye-kartal/"},
            { title: "Linkedin", link: "" },
        ],
    },
},
    en: {

        header: {
            themeDarkBtn : themeDarkBtn,
            themeLightBtn : themeLightBtn,
            darkBtn: "DARK MODE",
            lightBtn: "LIGHT MODE",
            languageSpan: "TÜRKÇE",
            languageBtn: "'YE GEÇ",
            navArray: [
                { title: "Skills", link: "#skills" },
                { title: "Projects", link: "#projects" },
                { title: "Hire me", link: "" },
            ],
        },

        hero: {
            lineDarkİmage: darkLine,
            lineLightİmage: lightLine,
            logoDarkİmage: logoDark,
            logoLightİmage: logoLight,
            image: imageOne,
            header: "Creative thinker Minimalism lover",
            name: "Sümeyye Kartal",
            description: "Hi, I’m Sümeyye. I’m a full-stack developer. If you are looking forba Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
            hireMe: "Hire me",
            hireMeLink: ""
        },

        skills: {
            header: "Skills",
            array: [
                { Title: "JavaScript", Desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { Title: "React.Js", Desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { Title: "Node.Js", Desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            ],
        },

        profile: {
            header: "Profile",
            aboutMe: "About Me",
            aboutMeDescOne: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        aboutMeDescTwo: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
            infoArray: [
                { title: "Date Of Birth", value: "18.04.1992" },
                { title: "City Of Rezidans", value: "İstanbul" },
                { title: "Educational Background", value: "İstanbul Üni. Matematik Lisans, 2022" },
                { title: "Preferred Role", value: "Frontend, UI"},
            ],
        },

        project: {
            header: "Projects",
            projectsArray: [
                { title: "Witflix",
                  desc: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                  github: "Github",
                  view: "View Site",
                  githubLink: "https://github.com/sumeyye-kartal/witflix",
                  viewLink: "",
                  toolsArray: ["HTML", "CSS", "React"],
                  image: projectOne

                },
                {
                    title: "Pizza Project",
                    desc: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    github: "Github",
                    view: "View Site",
                    githubLink: "https://github.com/Workintech/fsweb-s8-challenge-pizza",
                    viewLink: "",
                    toolsArray: ["HTML", "CSS", "React"],
                    image: projectTwo
                },
                {
                    title: "Restaurant Menu",
                    desc: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    github: "Github",
                    view: "View Site",
                    githubLink: "https://github.com/sumeyye-kartal/restaurant-menu",
                    viewLink: "",
                    toolsArray: ["HTML", "CSS", "React"],
                    image: projectThree
                },
            ],
        },

        footer: {
            header1: "Let's work together on",
            header2: "your next product.",
            email: "smyyekartal@outlook.com",
            footerLinks: [
                { title: "Personal Blog", link: "" },
                { title: "Github", link: "https://github.com/sumeyye-kartal/"},
                { title: "Linkedin", link: "" },
            ],
        },
    },
};

export default LanguagesData;
