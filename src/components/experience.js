import React from 'react';
import KonradGroup from '../images/konrad_group.jpg';
import GamerLink from '../images/gamerlink.jpg';
import Tabnex from '../images/tabnex.jpg';

const Experience = () => {
    return (
        <section id="experience" className="rounded-lg py-4
            flex flex-col items-start
            mb-6 xs:mb-8 scroll-mt-24
            ">
            <h1 className="font-ssans3bold pl-4 text-2xl xs:text-3xl">Experience</h1>
            {/* TODO: add experience*/}
            <Job
                title="Associate Software Developer"
                company="Konrad Group"
                date="Mar 2021 - Dec 2021"
                description="Contributed to the early development of a real estate website and server.
                    Also, maintained a swimming pool/hot tub water testing software.
                    "
                imgUrl={KonradGroup}
                href="https://www.konrad.com/"
                // TODO: add description
            />
            <Job
                title="Frontend Web Developer"
                company="GamerLink"
                date="May 2018 - Dec 2018"
                description="Simultaneously developed GamerLink 3.0 for both iOS and Android with React Native.
                    Ensured responsive layouts by thoroughly testing on various devices and resolutions.
                    Created Apollo GraphQL Higher Order Components for versatile data querying and mutating."
                imgUrl={GamerLink}
                href="https://gamerlinkapp.com/"
            />
            <Job
                title="Junior Full Stack Web Developer"
                company="Tabnex"
                date="Aug 2017 - Dec 2017"
                description="Implemented a responsive client-side chrome-extension with React, Redux, and CSS.
                    Contributed to the application’s Node, Express, and PostgreSQL back-end server.
                    Incrementally developed the application following a Scrum-Sprint methodology.
                    Automated resume parsing using the Sovren API through use of a microservice.
                    Utilized Mocha and Chai to thoroughly test and debug code."
                imgUrl={Tabnex}
                href="https://www.linkedin.com/company/tabnex/"
            />


            <p className="text-left text-lg mt-2">
            </p>
        </section>
    );
};

const Job = ({ title, company, date, description, imgUrl, href }) => {
    return (
    <a className="flex flex-row items-start mb-3 xs:mb-4
        hover:bg-gray-100 hover:shadow-md
        p-3 xs:p-4 w-full
        rounded-lg"
        href={href}>
        <img src={imgUrl} alt={company} className="w-12 h-12 xs:w-16 xs:h-16" />
        <div className="ml-4 flex flex-col items-start">
            <h2 className="font-ssans3bold text-lg xs:text-xl">{title}</h2>
            <h3 className=" text-base xs:text-lg">{company}</h3>
            <h4 className=" text-sm xs:text-base">{date}</h4>
            <p className="text-left text-sm xs:text-base mt-1.5 xs:mt-2">{description}</p>
        </div>
    </a>)
}

export default Experience;