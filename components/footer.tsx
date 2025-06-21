import Image from "next/image";

const Footer = () => {
  return (
    <div className="fixed z-10 bottom-10 left-10">
      <div className="flex items-center gap-5">
        <Image
          alt="Discord"
          src={"/images/discord.svg"}
          width={50}
          height={50}
          className="  w-[25px] aspect-square sm:w-[30px] md:w-[35px]"
        />
        <Image
          alt="Opensea"
          src={"/images/opensea.svg"}
          width={50}
          height={50}
          className="  w-[25px] aspect-square sm:w-[30px] md:w-[35px]"
        />
        <Image
          alt="Twitter"
          src={"/images/twitter.svg"}
          width={50}
          height={50}
          className="  w-[25px] aspect-square sm:w-[30px] md:w-[35px]"
        />
      </div>
    </div>
  );
};

export default Footer;
