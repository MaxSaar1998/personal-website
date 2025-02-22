import React from 'react';

import minWeatherScreenshot from '../images/minweather-screenshot.png';

const Projects = () => {
    return (
        <div id="projects" className="py-4  
            flex flex-col items-start
            mb-6 xs:mb-8 scroll-mt-24
            ">
            <h1 className="font-ssans3bold text-2xl xs:text-3xl px-3 xs:px-4">Projects</h1>
            {/* MinWeather*/}

            <Project
                title='MinWeather'
                date='Feb 2025'
                description='Created a simple weather website which uses various APIs to get location and weather data.
                    Ensured responsive design on smaller screen sizes
                '
                href='https://maxsaar1998.github.io/weather-site/'
                images={[minWeatherScreenshot]}
            />
        </div>
    );
};

const Project = ({ title, date, description, href, images }) => {
    return (
    <a className="flex flex-row items-start mb-3 xs:mb-4
        hover:bg-gray-100 hover:shadow-md
        p-3 xs:p-4 w-full
        rounded-lg"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className="flex flex-col items-start">
            <h2 className="font-ssans3bold text-lg xs:text-xl">{title}</h2>
            {/*<h3 className=" text-base xs:text-lg">{company}</h3>*/}
            <h4 className=" text-sm xs:text-base">{date}</h4>
            <p className="text-left text-sm xs:text-base mt-1.5 xs:mt-2">{description}</p>
            {images && (
                <div className='mt-1.5 xs:mt-2'>
                    {images.map((pic, index) =>
                        <img src={pic} key={index} className='w-full' alt='MinWeather'/>
                    )}
                </div>
            )}
        </div>
    </a>)
}

export default Projects;