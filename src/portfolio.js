const header = {
    homepage: 'wwww.keenanleepeters.com',
    title: 'KLP.',
}

const about = {
    name: 'Keenan Lee-Peters',
    role: 'Full Stack Engineer', 
    description: 'I am a full stack developer & designer. I love building things that work great and look amazing. I enjoy using my attention to detail, orderliness and problem-solving abilities to make things that help people.',
    resume: 'https://pdfhost.io/v/5ycrZNl7P_Keenan_LeePeters_CV',
    social: {
        linkedin: 'https://www.linkedin.com/in/keenanlee-peters/',
        github: 'https://github.com/klp1130/',

    }
}

const projects = [
   
    {
        name: 'ArcanaLife Employee Dashboard UI', 
        description:
            'ArcanaLife inc needed a single place where all of the tasks and tools for running the business could be easily located and used. With this dashboard ArcanaLife and its employees can improve the performance of the company, utilize their data more efficiently and generate better ROI. This project was built with React.',
        stack: ['React','Tailwind',],
        sourceCode: 'https://github.com/klp1130/dashboard',
        livePreview: 'https://admirable-puppy-c1b1a0.netlify.app/'
            
    },{
        name: 'BrualNotes', 
        description:
            'I took some established speech recognition code written in vanilla Javascript and expanded its functionality by refactoring it into a react app, setting up a JSON database for storage of the notes and added styling. The style is influenced by the current design trend of neubrutalism (hence brutal notes). This style is used by companies like Gumroad.com, Figma and MongoDB.',
        stack: ['React'],
        sourceCode: 'https://github.com/klp1130/brutalnotes',
        livePreview: 'https://klp1130.github.io/brutalnotes/'
            
    },
    {
        name: 'Portfolio', 
        description:
            'My personal portfolio site built with React, CSS and Material UI.',
        stack: ['React', 'CSS', 'Material UI'],
        sourceCode: 'https://github.com/klp1130/portfolio2',
        livePreview: 'http://www.keenanleepeters.com/'
            
    },  {
        name: 'Bloglist Backend', 
        description:
            'The backend for a bloglist app built with Node.js, and Express. The projects uses Token authentication and all unit and integration tests are written with Jest',
        stack: ['Node.js', 'Express', 'Jest', 'Async/await',],
        sourceCode: 'https://github.com/klp1130/bloglist',
        livePreview: ''
            
    },
    {
        name: 'Crud Hooks', 
        description:
            'A CRUD project using react hooks, UseState with minimalist styling.',
        stack: ['React'],
        sourceCode: 'https://github.com/klp1130/Crud_Hooks',
        livePreview: 'https://klp1130.github.io/Crud_Hooks/'
            
    },
    {
        name: 'Mayukha Wellness', 
        description:
            'A wellness website designed for a client starting a new business. Designed logo in iterative collaboration with client using Figma and Illustrator. Used a CMS so client can add and remove features.',
        stack: ['Figma', 'Illustrator', 'CMS'],
        sourceCode: '',
        livePreview: 'https://www.mayukhawellness.com/'
            
    },
    {
        name: 'Phonebook', 
        description:
            'A full stack phonebook application built with React, Express and Node.js',
        stack: ['React', 'Node.js', 'Express'],
        sourceCode: 'https://github.com/klp1130/Full-Stack-Open-Part-3',
        livePreview: 'https://secret-plains-99645.herokuapp.com/'
            
    },
]

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Jest',
    'Material UI',
    'Node.js',
    'Express',
    'Figma',
    'Illustrator',
    'CMS',
    'Async/await',
    'Tailwind',
]

const contact = {
    email: 'keenan.leepeters@gmail.com'

}

export { header, about, contact, skills, projects }