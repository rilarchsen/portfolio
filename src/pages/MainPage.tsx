import {Tooltip} from 'flowbite-react';
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "@contexts/useTheme.tsx";
import LegalITLogoColor from "@assets/legal_it_color.svg";
import LegalITLogoWhite from "@assets/legal_it_white.svg";
import AAUWhite from "@assets/aau_white.png";
import AAUColor from "@assets/aau_color.png";
import IBLogo from "@assets/ib_logo.webp";
import ProfilePicture from "@assets/profile_picture.jpg";
import Section from "@components/Section.tsx";
import { Carousel } from 'flowbite-react';
import {Link} from "react-scroll";
import ContactForm from "@partials/ContactForm.tsx";
import Footer from "@partials/Footer.tsx";

export default function MainPage() {
  const {toggleTheme, theme} = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <section key="1" className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-100">
      <header className="fixed top-0 left-0 right-0 flex items-center justify-around h-16 dark:bg-gray-800 bg-gray-200 dark:text-white shadow-md z-50 text-sm px-2 xl:text-base xl:px-0">
        <Link className="cursor-pointer hover:text-gray-300" to="about">
          About
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="education">
          Education
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="experience">
          Experience
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="projects">
          Projects
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="contact">
          Contact
        </Link>
        <button
          type="button"
          className="relative rounded-full text-black dark:hover:text-gray-300 dark:text-white"
          onClick={() => toggleTheme()}
        >
          {isDarkTheme
            ? <SunIcon className="h-6 w-6" aria-hidden="true" />
            : <MoonIcon className="h-6 w-6" aria-hidden="true" />
          }
        </button>
      </header>

      <Section
        sectionId={"about"}
        nextSectionId={"education"}
        nextSectionName={"Education"}
        className={"dark:bg-gray-900 bg-gray-100"}
      >
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold dark:text-gray-200 text-gray-800">Richard Avenia</h1>
          <img
            alt=""
            className="rounded-full mx-auto"
            src={ProfilePicture}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <p className="dark:text-gray-400 text-gray-600">Computer Science Student | Software Developer</p>
        </div>
      </Section>

      <Section
        sectionId={"education"}
        previousSectionId={"about"}
        nextSectionId={"experience"}
        previousSectionName={"About"}
        nextSectionName={"Experience"}
        className={"dark:bg-gray-800 bg-gray-200"}
      >
        <div className="space-y-12">
          <h2 className="text-4xl font-bold dark:text-gray-200 text-gray-800 text-center">Education</h2>
          <div className="flex flex-col space-y-8 dark:text-gray-400 text-gray-700">
            <div className={"flex items-center gap-8"}>
              <img
                className={""}
                width={"100"}
                src={isDarkTheme ? AAUWhite : AAUColor}
              />
              <div>
                <h3 className="font-bold">Bachelor's in Computer Science</h3>
                <p>Aalborg University</p>
                <p>2021 - 2024</p>
              </div>
            </div>
            <div className={"flex items-center gap-8"}>
              <img
                width={"100"}
                src={IBLogo}
              />
              <div>
                <h3 className="font-bold">International Baccalaureate Diploma Programme</h3>
                <p>Struer Statsgymnasium</p>
                <p>2019 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        sectionId={"experience"}
        previousSectionId={"education"}
        nextSectionId={"projects"}
        previousSectionName={"Education"}
        nextSectionName={"Projects"}
        className={"dark:bg-gray-900 bg-gray-100"}
      >
        <div className={"flex flex-col space-y-12 xl:space-y-24"}>
          <div className="xl:space-y-12 space-y-4">
            <h2 className="text-3xl xl:text-4xl font-bold dark:text-gray-200 text-gray-700 text-center">Work Experience</h2>
            <div className={"flex flex-col xl:flex-row items-center gap-4 xl:gap-8"}>
              <img
                src={isDarkTheme ? LegalITLogoWhite : LegalITLogoColor}
                className={"w-52 xl:w-72"}
              />
              <div className={"dark:text-gray-400 text-gray-700"}>
                <p className={"text-center xl:text-left"}>Student Software Developer</p>
                <p className="font-bold text-center xl:text-left">Legal IT ApS</p>
                <p className={"text-center xl:text-left"}>February 2023 - Present</p>
              </div>
            </div>
          </div>
          <div className="xl:space-y-12 space-y-4">
            <h2 className="text-3xl xl:text-4xl font-bold dark:text-gray-200 text-gray-700 text-center">Technologies</h2>
            <div className={"flex gap-4 flex-wrap px-12 xl:px-0 justify-center"}>
              <Tooltip content={"C#"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"C"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"TypeScript"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"JavaScript"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"Python"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"Azure"} style={theme}>
                <img src={"https://swimburger.net/media/ppnn3pcl/azure.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"Microsoft SQL Server"} style={theme}>
                <img src={"https://796c21.p3cdn2.secureserver.net/wp-content/uploads/2018/10/SQL-Server-Logo.jpg?time=1699442488"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"ASP.NET Core"} style={theme}>
                <img src={"https://ardalis.com/static/2bcf8d1ec45106e529bb3a6176467a31/c5cb2/aspnetcore-logo.png"} className={"h-[50px]"}/>
              </Tooltip>
              <Tooltip content={"React"} style={theme}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"} className={"h-[50px]"}/>
              </Tooltip>
            </div>
          </div>
        </div>
      </Section>

      <Section
        sectionId={"projects"}
        previousSectionId={"experience"}
        nextSectionId={"contact"}
        previousSectionName={"Experience"}
        nextSectionName={"Contact"}
        className={"dark:bg-gray-800 bg-gray-200"}
      >
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-200 text-center">Projects</h2>
          <div className="h-[24rem] sm:h-64 xl:h-80 2xl:h-96 w-[20rem] xl:w-[48rem]">
            <Carousel slide={false}>
              <div
                className="flex flex-col xl:flex-row gap-8 h-full items-center xl:justify-center bg-gray-300 dark:bg-gray-700 dark:text-white py-8 px-10 xl:px-20 select-none overflow-auto">
                <div className={"flex flex-row xl:flex-col dark:bg-gray-800 bg-gray-200 p-4 xl:p-8 rounded"}>
                  <h1>K</h1>
                  <h1>Y</h1>
                  <h1>C</h1>
                </div>
                <div>
                  <h1 className={"text-center xl:text-left"}>KYC Platform</h1>
                  <p>
                    A 'Know Your Customer' full-stack platform designed to collect information from public sources,
                    such as CVR, PEP lists, and Google, and serve as a repository for gathered customer information.
                    The platform also supports the request and storing of customer identity verification documents,
                    as well as the automatic renewal of connected data for stored customers. The development stack
                    involved an ASP.NET Core backend with Azure SQL and document databases, and a TypeScript React
                    frontend.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col xl:flex-row gap-8 h-full items-center xl:justify-center bg-gray-300 dark:bg-gray-700 dark:text-white py-8 px-10 xl:px-20 select-none overflow-auto">
                <div className={"flex flex-row xl:flex-col dark:bg-gray-800 bg-gray-200 p-4 xl:p-8 rounded"}>
                  <h1>Y</h1>
                  <h1>A</h1>
                  <h1>L</h1>
                </div>
                <div>
                  <h1 className={"text-center xl:text-left"}>Yet Another Language</h1>
                  <p>
                    YAL is a language designed to support single-core asynchronous programming natively on
                    microcontrollers
                    (such as Arduino Uno or ESP32) directly through the "async/await" keywords, and syntax familiar to
                    C/C++ programmers. The compiler is written in C#, using a parser generated with ANTLR, and produces
                    C++ code and optionally a scaffolded PlatformIO project. The language also supports referencing
                    external/standard C++ functions.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col xl:flex-row gap-8 h-full items-center xl:justify-center bg-gray-300 dark:bg-gray-700 dark:text-white py-8 px-10 xl:px-20 select-none overflow-auto">
                <div className={"flex flex-row xl:flex-col dark:bg-gray-800 bg-gray-200 p-4 xl:p-8 rounded"}>
                  <h1>C</h1>
                  <h1>X</h1>
                  <h1>R</h1>
                </div>
                <div>
                  <h1 className={"text-center xl:text-left"}>Chest X-ray AI Disease Classifier</h1>
                  <p>
                    A machine learning model to detect and classify 5 common diseases in chest X-rays.
                    The model was trained on a combined dataset from the CheXpert (Stanford Hospital)
                    and ChestX-ray8 (NIH Clinical Center) datasets (totaling 335,534 frontal and lateral samples).
                    Both traditional (SVM) and deep learning (DenseNet) machine learning methods were tested
                    and documented, as well as ensemble approaches.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>

        </div>
      </Section>

      <Section
        sectionId={"contact"}
        previousSectionId={"projects"}
        previousSectionName={"Projects"}
        className={"dark:bg-gray-900 bg-gray-100 h-fit xl:py-96 py-32"}
      >
        <ContactForm/>
      </Section>

      <Footer/>

    </section>
  )
}