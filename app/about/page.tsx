import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import Instagram icon
import Link from "next/link";
import image from "../../public/images/Dp.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <Image
          src={image}
          alt="Profile Pic"
          height={2000}
          width={2000}
        />

        <div className="info-box">
          <div className="text">
            <h3>Hi, I'm</h3>
            <h1>Syed Ali Hashmi</h1>
            <span>Software Engineer</span>
          </div>

          <div className="btn-group">
            <div className="btn">
              <Link style={{ color: "white" }} className="aboutLink" href={"#"} target="_blank">
                Download CV
              </Link>
            </div>
            <div className="btn">
              <Link style={{ color: "white" }} className="aboutLink" href={"/contact"}>
                Contact
              </Link>
            </div>
          </div>

          <div className="socials">
            <Link
              style={{ color: "white" }}
              href={"https://github.com/alihashmi2288"}
              target="_blank"
            >
              <FaGithub className="i" />
            </Link>

            <Link
              style={{ color: "white" }}
              href={"https://www.linkedin.com/in/hashmiali2288"}
              target="_blank"
            >
              <FaLinkedin className="i" />
            </Link>

            <Link
              style={{ color: "white" }}
              href={"https://www.instagram.com/hashmi.ali_1"} // Add your Instagram link here
              target="_blank"
            >
              <FaInstagram className="i" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
