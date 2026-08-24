import {
    InstagramLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-slate-200 shadow-sm bg-zinc-300 border-t w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-4 py-4 gap-4 max-w-7xl mx-auto">
        <div className="text-sm text-slate-300 font-semibold">
          <p className="text-blue-950">Ignis Code Solutions.</p>
          <p className="text-blue-950">2026 Ignis Core. Todos os direitos reservados.</p>
        </div>
        
        <nav className="flex gap-4">
          <a
            className="text-blue-950 font-bold hover:text-blue-800 transition-all"
            href="#"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-blue-950 hover:text-blue-800 transition-all"
            href="#"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-blue-950 hover:text-blue-800 transition-all"
            href="#"
            title="Youtube"
            aria-label="Youtube"
          >
            <YoutubeLogoIcon size={22} weight="fill" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
