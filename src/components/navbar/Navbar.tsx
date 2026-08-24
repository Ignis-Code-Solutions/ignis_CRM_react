import { ListIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200 shadow-sm bg-zinc-300 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
  {/* Marca */}
  <Link to="/" className="flex items-center active:scale-95 transition-transform" onClick={() => setMenuAberto(false)}>
    <img
      alt="Logo Ignis Core"
      className="h-12 md:h-15 w-auto"
      src="https://ik.imagekit.io/dy8ytykq9/d34b7455-2eba-4178-b506-c19053c99908.png"
    />
  </Link>

  {/* Links + Ícones juntos */}
  <div className="flex items-center gap-4">
    {/* Links de navegação (Desktop) */}
    <div className="hidden md:flex gap-2">
      <Link to="/" className="px-3 py-1 text-blue-950 font-bold hover:text-blue-600 transition-colors">Home</Link>
      <Link to="/sobre" className="px-3 py-1 text-blue-950 font-bold hover:text-blue-600 transition-colors">Sobre Nós</Link>
      <Link to="/oportunidades" className="px-3 py-1 text-blue-950 font-bold hover:text-blue-600 transition-colors">Oportunidades</Link>
    </div>

    {/* Ícone de perfil */}
    <Link to='/login' className="hidden sm:inline-flex text-blue-950 hover:bg-slate-100 transition-colors p-2 rounded-full" aria-label="Minha conta">
      <UserIcon size={24} />
    </Link>

    {/* Hambúrguer (Mobile) */}
    <button
      className="md:hidden text-slate-600 p-2"
      onClick={() => setMenuAberto((open) => !open)}
      aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
      aria-expanded={menuAberto}
    >
      {menuAberto ? <XIcon size={26} /> : <ListIcon size={26} />}
    </button>
  </div>
</nav>

      {/* Links de navegação (Mobile) */}
      <div className={`${menuAberto ? "flex" : "hidden"} md:hidden flex-col gap-1 border-t border-slate-200 px-4 py-3`}>
        <Link to="/" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to="/sobre" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors" onClick={() => setMenuAberto(false)}>Sobre Nós</Link>
        <Link to="/oportunidades" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors" onClick={() => setMenuAberto(false)}>Oportunidades</Link>
      </div>
    </header>
  );
}
