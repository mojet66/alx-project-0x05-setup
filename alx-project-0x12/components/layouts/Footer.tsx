import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="mx-auto text-center container">
        <h1 className="font-semibold text-lg">Image Generation App</h1>
        <p className="mt-2 text-sm">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="mt-4">
          <Link href="#" className="mx-2 text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="mx-2 text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="mx-2 text-gray-400 hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
