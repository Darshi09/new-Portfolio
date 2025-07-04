import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="shahdarshi910@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="8799126055" Image={FiPhone} />
      <SingleInfo text="Ahmedabad,Gujarat" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
