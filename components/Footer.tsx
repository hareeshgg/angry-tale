import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AngryTale
        </p>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
