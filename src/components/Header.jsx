import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center w-full p-4 h-[10vh] justify-between xl:justify-start z-50 bg-nav_footer">
      <div className="md:w-[10vw]">
        <img className="h-12 xl:h-20" src="/src/img/Logo.png"></img>
      </div>
      <nav
        id="inicio"
        className={`fixed w-[90vw] xl:static h-full ${showMenu ? 'left-0' : '-left-full'} top-0 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 bg-nav_footer`}
      >
        <a href="#inicio" className="text-texto text-2xl">
          Inicio
        </a>
        <a href="#nosotros" className="text-texto text-2xl">
          Nosotros
        </a>
        <a href="#portfolio" className="text-texto text-2xl">
          Portfolio
        </a>
        <a href="#contacto" className="text-texto text-2xl">
          Contacto
        </a>
        
      </nav>
      <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden text-2xl"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
    </header>
  );
};

export default Header;
