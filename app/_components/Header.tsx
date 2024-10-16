"use client";
import TypingEffect from "react-typed.ts";

export const Typings = () => {
  return (
    <div>
      <div className="type-wrapper">
        <h1 id="hero-text" className="typed-text">
          <TypingEffect
            strings={[
              "Meet Elijah Eze",
              "Full Stack Developer Extraordinaire",
              "Expert in Scaling Cloud Architectures",
              "DevOps Engineer with a Passion for Automation",
              "Trusted Problem-Solver in High-Stakes Projects",
              "Delivering Solutions that Exceed Expectations",
              "The Engineer You Need for Your Next Big Challenge",
            ]}
            typeSpeed={70}
            backSpeed={0}
            startDelay={1000}
            backDelay={500}
            loop={true}
            showCursor={true}
            cursorChar="_"
          />
        </h1>
      </div>
      <div className="type-wrapper">
        <p id="hero-subtext" className="typed-text">
          <TypingEffect
            strings={[
              "Welcome to My Portfolio",
              "I'm Elijah Eze",
              "Full Stack Developer",
              "Cloud Enthusiast",
              "DevOps Specialist",
            ]}
            typeSpeed={70}
            backSpeed={50}
            startDelay={1000}
            backDelay={500}
            loop={true}
            showCursor={true}
            cursorChar="_"
          />
        </p>
      </div>
    </div>
  );
};
