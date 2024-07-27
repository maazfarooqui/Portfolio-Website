export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Open to Work",
      description: "While I haven't had any client yet (gotta start somewhere!), I'm super excited to build strong relationships through open communication. ",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "24x7",
      description: "Early bird or night owl? No worries, I'm flexible for client calls across the globe. ",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I am still learning!!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building my own Portfolio",
      description: "Sneak Peak",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Let's Collab?",
      description: "Copy my mail below and hit me up",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      des: "Using the concepts of frontend of Web Development: HTML, CSS, JS, I built a spotify Clone",
      img: "/spotify3.gif",
      iconLists: ["/html.svg", "/css.svg", "/javascript.svg",],
      link: "https://spotifaye.freewebhostmost.com/",
    },
    {
      id: 2,
      title: "Netflix Clone",
      des: "A very Simple Project that Used HTML and CSS to replicate the Home page of Netflix",
      img: "/Netflix.gif",
      iconLists: ["/html.svg", "/css.svg",],
      link: "https://maazfarooqui.github.io/Netflixclone/",
    },
    {
      id: 3,
      title: "CNN model for Brain tumor Detection",
      des: "Currently working on a CNN model for Brain tumor Detection",
      img: "/CNN.gif",
      iconLists: ["/python.svg", "/pandas.svg", "/keras.svg", "/matplotlib.svg"],
      link: "https://maazport.netlify.app/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      des: "This was my first portfolio website that I built.",
      img: "/threejs.gif",
      iconLists: [ "/tail.svg", "/html.svg", "/three.svg" ,"javascript.svg", ],
      link: "https://maazport.netlify.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "It's been excellent working with maaz.",
      name: "Maaz Ahmad",
      title: "Director of My Own company",
      image: "/maaz.jpg"
    },
    {
      quote:
        "Another testimonial by me cause I haven't worked with anyone yet{sed moment}.",
      name: "Maaz Ahmad",
      title: "CEO of some company I will open",
      image: "/maaz.jpg"
    },
    {
      quote:
        "You know, ,I had to reduce the size of the cards as I have no clients and I have nothing to write about myself.",
      name: "Maaz Ahmad",
      title: "Software engineer Intern at Ardra AI",
      image: "/maaz.jpg"
    },
    {
      quote:
        "Please work with me.",
      name: "Maaz Ahmad, Again!!",
      title: "Jobless",
      image: "/maaz.jpg"
    },
    // {
    //   // quote:
    //   //   "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   // name: "Michael Johnson",
    //   // title: "Director of AlphaStream Technologies",
    // },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Ardra AI",
      img: "/ardraai.png",
      nameImg: "/ardraai.png",
    },
    // {
    //   id: 2,
    //   name: "AcmreGrade",
    //   img: "/app.svg",
    //   nameImg: "/appName.svg",
    // },
    {
      id: 3,
      name: "Amity",
      img: "/AmityUniversity.png",
      nameImg: "/amityname.png",
    }
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Web Developer",
      desc: "Developed various Websites using tools like React, Threejs, Nextjs.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Designer",
      desc: "Customized and Designed the Website for a company using concepts of Gamification.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Social Media Manager",
      desc: "Managed the Social media handles of a club based in my Uni.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Machine Learning Engineer",
      desc: "Developing various Models in various Domains including image classification, speech recognition.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/maazfarooqui"
      
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://tr.ee/2kSsZUu3iv"
    },
    {
      id: 3,
      img: "/link.svg",
       link: "https://www.linkedin.com/in/maaz-ahmad-farooqui-508951271/"
    },
  ];