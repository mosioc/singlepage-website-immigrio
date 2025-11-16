import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../consts/bundle';
import styles from '../style';

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar ${styles.paddingX}`}>
      <div className="text-white font-bold text-xl cursor-pointer">Immigrio</div>

      {/* desktop nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav: NavLink, index: number) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index !== navLinks.length - 1 ? 'mr-10' : ''}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile nav */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className={`bg-blue-500 rounded-2xl ${styles.paddingX} list-none flex flex-col justify-start items-start flex-1`}>
            {navLinks.map((nav: NavLink, index: number) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index !== navLinks.length - 1 ? 'mb-4' : ''}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
