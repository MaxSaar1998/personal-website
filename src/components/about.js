import React from 'react';

const About = () => {
    return (
        <section id="about" className=" rounded-lg pb-4 px-4
            flex flex-col items-start
            mb-8 scroll-mt-24
            ">
            <h1 className="font-ssans3bold text-3xl">About</h1>
            {/* TODO: add about paragraph*/}
            <p className="text-lg text-left mt-2">
                Hello, I'm a web developer with a passion for creating user-friendly websites and apps.
                I love the process of bringing ideas to life with clean code, thoughtful design, and creativity.    
            </p>
            <p className="text-lg text-left mt-2">
                I have experience with <b>React</b>, <b>React Native</b>, <b>Node.js</b>, <b>PostgreSQL</b> and many other web technologies. 
                I am always looking to learn new things and improve my skills.   
            </p>
            <p className="text-lg text-left mt-2">
                Currently, I am doing contract web development jobs and working on personal projects.
            </p>
            <p className="text-lg text-left mt-2">
               When I'm not working, I enjoy exercising, playing guitar, and hiking.
            </p>
        </section>
    );
};

export default About;