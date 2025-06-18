import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4 text-white">
      <div className="flex justify-between items-center mx-auto container">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl">ImageGen</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/gallery" className="hover:text-gray-400">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
