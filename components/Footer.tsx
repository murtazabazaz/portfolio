import React from "react";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from 'next-themes';

const Footer = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div
        className={`mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between ${
          currentTheme === 'dark' ? 'text-neutral-100 bg-black' : 'text-neutral-900 bg-white'
        }`}
      >
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2024 Murtaza Bazaz<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Danish9991/" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
              style={{ color: currentTheme === 'dark' ? '#f5f5f5' : '#1f2937' }} // Set icon color
            />
          </a>
          <a href="https://twitter.com/Danishyousufmir" rel="noreferrer" target="_blank">
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
              style={{ color: currentTheme === 'dark' ? '#f5f5f5' : '#1f2937' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/danish-yousuf-mir/"
            rel="noreferrer" target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
              style={{ color: currentTheme === 'dark' ? '#f5f5f5' : '#1f2937' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
