import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex flex-wrap p-4 justify-center items-center bg-black font-mono text-white md:p-6 md:justify-between">
      <div className="mb-1 md:mb-0">© 2023 Made ❤️ by Rahul</div>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/rahulray131/"
          target="_blank"
          className="mr-4 text-white"
        >
          <ImLinkedin fontSize="20px" />
        </a>
        <a
          href="https://www.instagram.com/rahulray_0131"
          target="_blank"
          className="mr-4 text-white"
        >
          <BsInstagram fontSize="20px" />
        </a>
        <a
          href="mailto:rryadav2025@gmail.com"
          target="_blank"
          className="mr-4 text-white"
        >
          <AiOutlineMail fontSize="20px" />
        </a>
        <a
          href="https://github.com/raahul131"
          target="_blank"
          className="mr-4 text-white"
        >
          <AiFillGithub fontSize="20px" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
