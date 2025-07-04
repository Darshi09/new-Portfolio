import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/darshi-shah-49a63b257/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Darshi09" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/darshiii__9/?hl=en" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
