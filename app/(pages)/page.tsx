import { Typings } from "../_components/Header";
import { ProjectType, SkillType } from "../_types";

export default async function Home() {
  const skillsData: SkillType[] = [
    {
      href: "https://aws.amazon.com",
      src: "/images/aws.svg",
      alt: "aws",
    },
    {
      href: "https://www.linux.org/",
      src: "/images/linux.svg",
      alt: "linux",
    },
    {
      href: "https://nodejs.org",
      src: "/images/nodejs.svg",
      alt: "nodejs",
    },
    {
      href: "https://www.docker.com/",
      src: "/images/docker.svg",
      alt: "docker",
    },
    {
      href: "https://expressjs.com",
      src: "/images/express.svg",
      alt: "express",
    },
    {
      href: "https://firebase.google.com/",
      src: "/images/firebase.svg",
      alt: "firebase",
    },
    {
      href: "https://www.gnu.org/software/bash/",
      src: "/images/bash.svg",
      alt: "bash",
    },
    {
      href: "https://www.jenkins.io",
      src: "/images/jenkins.svg",
      alt: "jenkins",
    },
    {
      href: "https://www.mongodb.com/",
      src: "/images/mongodb.svg",
      alt: "mongodb",
    },
    {
      href: "https://www.mysql.com/",
      src: "/images/mysql.svg",
      alt: "mysql",
    },
    {
      href: "https://nextjs.org/",
      src: "/images/nextjs.svg",
      alt: "nextjs",
    },
    {
      href: "https://www.nginx.com",
      src: "/images/nginx.svg",
      alt: "nginx",
    },
    {
      href: "https://www.postgresql.org",
      src: "/images/postgresql.svg",
      alt: "postgresql",
    },
    {
      href: "https://postman.com",
      src: "/images/postman.svg",
      alt: "postman",
    },
    {
      href: "https://reactjs.org/",
      src: "/images/react.svg",
      alt: "react",
    },
    {
      href: "https://reactnative.dev/",
      src: "/images/header_logo.svg",
      alt: "reactnative",
    },
    {
      href: "https://www.typescriptlang.org/",
      src: "/images/typescript/typescript.svg",
      alt: "typescript",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "/images/javascript.svg",
      alt: "javascript",
    },
  ];
  const projectsData: ProjectType[] = [
    {
      title: "Clifbay",
      description: "One of Africa's fastest growing online marketplace.",
      image: "/images/clifbay.png",
      link: "https://clifbay.com",
    },
    {
      title: "AWS Cloud IAC",
      description: "Simplifying cloud deployment process.",
      image: "https://miro.medium.com/v2/resize:fit:700/0*IF5Z05nkdvA3JDXI.png",
      link: "https://github.com/ezecodes/aws-services",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <Typings />
        </div>
      </header>
      <section id="about" className="about-section observe">
        <div className="container">
          <div className="about-content">
            <div className="profile-picture">
              <img
                src="https://avatars.githubusercontent.com/u/78436201?v=4"
                alt="Elijah Eze"
              />
            </div>

            <div className="about-text about-me typed-text">
              <h2>About Me</h2>
              <div className="shortened-content" id="shortenedContent">
                <p>
                  Hi, I’m Elijah Eze. My journey into software development has
                  been a continuous exploration of curiosity, challenges, and
                  growth. As a backend developer with a deep passion for cloud
                  infrastructure and DevOps, I’ve spent years refining my skills
                  in building robust, secure, and scalable systems.
                </p>
                <p>
                  <strong>
                    Discovering Backend Development: The Beginning
                  </strong>
                  <br />I didn’t set out to become a backend developer
                  initially—my path was shaped by sheer curiosity. I wanted to
                  understand what really powered the applications we use every
                  day. That led me to backend technologies, and once I got my
                  hands on Node.js and Express, I was hooked. From there, I dove
                  into databases like PostgreSQL, MongoDB, SQL, and MariaDB,
                  learning how to make them work together with Redis and
                  Memcached for better performance and scalability.
                </p>
                <p>
                  For me, backend development isn’t just about writing code;
                  it’s about solving real-world problems in the most efficient
                  way possible. Every system I build is designed with security,
                  performance, and scalability in mind. Over the years, I’ve
                  worked with message queues like RabbitMQ to ensure systems
                  remain robust, no matter the scale. It’s been a gradual
                  journey, learning bit by bit, and honing my skills through
                  real-world experience.
                </p>

                <p className="read-more">
                  <strong>
                    From Developer to Server Admin: A Necessary Step
                  </strong>
                  <br />
                  My introduction to server administration came out of
                  necessity, not choice. I had just built a full-stack Node.js
                  project, and it was time to deploy it. At the time, I couldn’t
                  afford expensive deployment services, so I decided to do it
                  myself. I bought a VPS and went through the process of
                  configuring the server from scratch—setting up the environment
                  for Node.js, ensuring security, and optimizing it for
                  performance.
                </p>

                <p className="read-more">
                  That experience opened a new world for me. I realized that
                  understanding how servers work, how to configure them, and how
                  to manage them is just as important as writing good code. From
                  there, I took guided courses and continued to build on my
                  newfound passion for server administration. What started as a
                  one-time necessity became a core part of my skill set and
                  something I truly enjoy doing.
                </p>

                <p className="read-more">
                  <strong>Embracing Cloud Technologies: AWS and Beyond</strong>
                  <br />
                  My first experience with cloud technologies came when my team
                  decided to use AWS for deploying our Node.js applications. I
                  jumped on the opportunity and took charge of the deployment
                  process. I set up an EC2 instance, configured the security
                  groups, managed storage, and handled the necessary networking
                  configurations. It felt natural, like an extension of the
                  server admin work I’d already been doing.
                </p>
                <p>
                  The transition from traditional server administration to cloud
                  infrastructure was seamless. I leveraged my existing knowledge
                  to master AWS services, setting up environments that could
                  scale easily and handle high traffic. Since then, I’ve become
                  the go-to person for cloud setups within the teams I work
                  with, setting up CI/CD pipelines and cloud infrastructure that
                  improves efficiency and reduces manual intervention. One of my
                  proudest moments was when I implemented a CI/CD pipeline that
                  cut our deployment times by 70%. It drastically improved our
                  development workflow, making it easier for teams to push
                  updates without worrying about downtime or errors. This
                  achievement solidified my role not just as a backend developer
                  but also as someone who can architect, deploy, and manage
                  cloud infrastructure.
                </p>
                <p className="read-more">
                  <strong>
                    Building for the Future: Backend & Cloud Expertise
                  </strong>
                  <br />
                  Today, I bring together all the skills I’ve accumulated over
                  the years to build secure, high-performance backend systems
                  that integrate seamlessly with cloud infrastructure. I’ve
                  worked with teams to configure AWS services, set up message
                  queues using RabbitMQ, and manage databases for optimal
                  performance. But for me, this journey is never ending. I’m
                  constantly exploring new technologies and pushing the
                  boundaries of what I can do—whether it’s optimizing deployment
                  pipelines or building backend systems that can handle millions
                  of requests without breaking a sweat.
                </p>
                <p>
                  I’m passionate about what I do, and I’m always excited to take
                  on new challenges. Whether you’re building a product from
                  scratch or optimizing an existing system, I’m here to help
                  make sure your backend is rock-solid and your cloud
                  infrastructure is bulletproof.
                </p>
              </div>
              <p>Here are some highlights of my journey:</p>
              <div className="highlights">
                <div className="highlight-item">
                  <h3>Projects Completed</h3>
                  <p>
                    16+ projects, including web applications, APIs, and cloud
                    solutions.
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>APIs Built</h3>
                  <p>
                    100+ API routes developed for various applications and
                    services.
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>Technologies Used</h3>
                  <p>
                    Mastered technologies like AWS, Node.js, Linux, and React.
                  </p>
                </div>

                <div className="highlight-item">
                  <h3>Blog Posts</h3>
                  <p>
                    5+ articles on Medium about software development and DevOps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills-section observe">
        <div className="container">
          <h2 className="typed-text">Skills</h2>
          <div className="skills-grid">
            {skillsData.map((skill, idx) => (
              <div className="skill" key={idx}>
                <a href={skill.href} target="_blank" rel="noreferrer">
                  <img src={skill.src} alt={skill.alt} width="40" height="40" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section observe">
        <div className="container">
          <h2 className="typed-text">Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <div className="project-card" key={idx}>
                <img src={project.image} alt={project.title} height="auto" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p> {project.description}</p>
                  <a href={project.link} target="_blank" className="cta-button">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section observe">
        <div className="container">
          <h2 className="typed-text">Contact Me</h2>
          <form
            action="/contact"
            method="post"
            id="contact-form"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
