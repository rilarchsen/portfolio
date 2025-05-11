import {Tooltip} from 'flowbite-react';
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "@contexts/useTheme.tsx";
import LegalITLogoColor from "@assets/legal_it_color.svg";
import LegalITLogoWhite from "@assets/legal_it_white.svg";
import StrongmindsLogoColor from "@assets/strongminds-logo-color.svg";
import StrongmindsLogoWhite from "@assets/strongminds-logo-white.svg";
import AAUWhite from "@assets/aau_white.png";
import AAUColor from "@assets/aau_color.png";
import IBLogo from "@assets/ib_logo.webp";
import ProfilePicture from "@assets/profile_picture.jpg";
import Section from "@components/Section.tsx";
import { Carousel } from 'flowbite-react';
import {Link} from "react-scroll";
import ContactForm from "@partials/ContactForm.tsx";
import Footer from "@partials/Footer.tsx";
import CarouselCard from '@components/CarouselCard';

export default function MainPage() {
  const {toggleTheme, theme} = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <section key="1" className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-100">
      <header className="fixed top-0 left-0 right-0 flex items-center justify-around h-16 dark:bg-gray-800 bg-gray-200 dark:text-white shadow-md z-50 text-sm px-2 lg:text-base lg:px-0">
        <Link className="cursor-pointer hover:text-gray-300" to="about">
          About
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="experience">
          Experience
        </Link>
        <Link className="cursor-pointer hover:text-gray-300" to="education">
          Education
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
        nextSectionId={"experience"}
        nextSectionName={"Experience"}
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
          <div className="dark:text-gray-400 text-gray-600">Software Consultant at <a href="https://strongminds.dk" target='__blank'>STRONGMIINDS | A Trifork Company</a></div>
        </div>
      </Section>

      <Section
        sectionId={"experience"}
        previousSectionId={"about"}
        previousSectionName={"About"}
        nextSectionId={"education"}
        nextSectionName={"Education"}
        className={"dark:bg-gray-800 bg-gray-200"}
      >
        <div className={"flex flex-col space-y-12 lg:space-y-24"}>
          <div className="lg:space-y-12 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-200 text-gray-700 text-center">Work Experience</h2>
            <div className={"flex flex-col lg:flex-row items-center gap-4 lg:gap-8 my-8"}>
              <img
                src={isDarkTheme ? StrongmindsLogoWhite : StrongmindsLogoColor}
                className={"w-52 lg:w-72"}
              />
              <div className={"dark:text-gray-400 text-gray-700"}>
                <p className={"text-center lg:text-left"}>Software Consultant</p>
                <p className="font-bold text-center lg:text-left">STRONGMINDS | A Trifork Company</p>
                <p className={"text-center lg:text-left"}>August 2024 - Present</p>
              </div>
            </div>
            <div className={"flex flex-col lg:flex-row items-center gap-4 lg:gap-8 my-8"}>
              <img
                src={isDarkTheme ? LegalITLogoWhite : LegalITLogoColor}
                className={"w-52 lg:w-72"}
              />
              <div className={"dark:text-gray-400 text-gray-700"}>
                <p className={"text-center lg:text-left"}>Student Software Developer</p>
                <p className="font-bold text-center lg:text-left">Legal IT ApS</p>
                <p className={"text-center lg:text-left"}>February 2023 - June 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:space-y-12 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-200 text-gray-700 text-center">Technologies</h2>
            <div className={"flex gap-4 flex-wrap px-12 lg:px-0 justify-center"}>
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
        sectionId={"education"}
        previousSectionId={"experience"}
        previousSectionName={"Experience"}
        nextSectionId={"projects"}
        nextSectionName={"Projects"}
        className={"dark:bg-gray-900 bg-gray-100"}
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
                <h3 className="font-bold">Computer Science BSc.</h3>
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
        sectionId={"projects"}
        previousSectionId={"education"}
        previousSectionName={"Education"}
        nextSectionId={"contact"}
        nextSectionName={"Contact"}
        className={"dark:bg-gray-800 bg-gray-200"}
      >
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-200 text-center">Projects</h2>
          <div className="h-[24rem] sm:h-64 lg:h-80 2lg:h-96 w-[20rem] lg:w-[48rem]">
            <Carousel slide={false}>
              <CarouselCard 
                title="LEGO House Digital Rebuild" 
                sideInitials={["L", "E", "G", "O"]} 
                body="I was part of the Trifork team delivering the digital rebuild for LEGO House.
                    The project facilitated the infrastructural shift of the platform from on-premise to the cloud
                    with the goal of modernizing the interactive experiences and future-proofing the development of new experiences." 
              />
               <CarouselCard 
                title="vSolid" 
                sideInitials={["V", "S"]} 
                body='A version control layer for decentralized RDF graph databases using the Solid protocol.
                    The Solid protocol defines a decentralized web of RDF data graphs based on individual pods
                    giving users full control over their data. vSolid adds a versioning layer that allows users
                    to query and restore previous versions of their data. The prototypical implementation
                    includes a group of components added to the open-source Community Solid Server implementation
                    of the Solid protocol to handle data versioning and versioned queries.'
              />
              <CarouselCard 
                title="Chest X-ray AI Disease Classifier" 
                sideInitials={["C", "X", "R"]} 
                body='A machine learning model to detect and classify 5 common diseases in chest X-rays.
                    The model was trained on a combined dataset from the CheXpert (Stanford Hospital)
                    and ChestX-ray8 (NIH Clinical Center) datasets (totaling 335,534 frontal and lateral samples).
                    Both traditional (SVM) and deep learning (DenseNet) machine learning methods were tested
                    and documented, as well as ensemble approaches.'
              />
              <CarouselCard 
                title="KYC Platform" 
                sideInitials={["K", "Y", "C"]} 
                body="A 'Know Your Customer' full-stack platform designed to collect information from public sources,
                    such as CVR, PEP lists, and Google, and serve as a repository for gathered customer information.
                    The platform also supports the request and storing of customer identity verification documents,
                    as well as the automatic renewal of connected data for stored customers." 
              />
              <CarouselCard 
                title="Yet Another Language" 
                sideInitials={["Y", "A", "L"]} 
                body='YAL is a language designed to support single-core asynchronous programming natively on
                    microcontrollers
                    (such as Arduino Uno or ESP32) directly through the "async/await" keywords, and syntax familiar to
                    C/C++ programmers. The compiler is written in C#, using a parser generated with ANTLR, and produces
                    C++ code and optionally a scaffolded PlatformIO project. The language also supports referencing
                    external/standard C++ functions.'
              />
            </Carousel>
          </div>

        </div>
      </Section>

      <Section
        sectionId={"contact"}
        previousSectionId={"projects"}
        previousSectionName={"Projects"}
        className={"dark:bg-gray-900 bg-gray-100 h-fit lg:py-96 py-32"}
      >
        <ContactForm/>
      </Section>

      <Footer/>

    </section>
  )
}
