import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between max-w-7xl mx-auto p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://skyelipinternationalltd.com/img/logo.jpeg"
            alt="logo"
          />
        </Link>
        {/* <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            {" "}
            Follow
          </h3>
        </div> */}
      </div>
      <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer font-light">
        <Link href="https://skyelipinternationalltd.com/">
          <h3>HOME</h3>
        </Link>
        <Link href="https://skyelipinternationalltd.com/services">
          <h3>SERVICES</h3>
        </Link>
        <Link href="https://skyelipinternationalltd.com/about">
          <h3>ABOUT</h3>
        </Link>

        <h3 className="text-white bg-[#AC49BA] px-4 py-1 rounded-full">
          <Link href="https://skyelipinternationalltd.com/contact">
            CONTACT
          </Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
