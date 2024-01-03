import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const year = new Date();
  const newyear = year.getFullYear();

  return (
    <section className=" relative left-0 bottom-0 bg-slate-800 text-white font-medium flex justify-around items-center px-4 h-14 max-sm:w-fit max-sm:p-1">
      <div className="">
        <h1 className="text-l max-sm:text-sm "> Copyright @{newyear} || All right Reserved</h1>
      </div>

      <div className="flex justify-around items-center  ">
        <h1> Countact Us </h1>
        <a href="#" className="mx-2">
          {" "}
          <BsLinkedin />
        </a>
        <a href="#" className="mx-2">
          {" "}
          <BsInstagram />
        </a>
        <a href="#" className="mx-2">
          {" "}
          <BsFacebook />
        </a>
        <a href="#" className="mx-2">
          {" "}
          <BsTwitter />
        </a>
      </div>
    </section>
  );
}

export default Footer;
