// src/components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <div className="my-12">
      <div className="logo my-4">
        <a
          href="https://github.com/sdragonpt"
          target="_blank"
          className="mr-4 transition-colors duration-300"
        >
          <i className="fa-brands fa-github fa fa-github text-gray-400 hover:text-white transition-colors duration-300" style={{ fontSize: '32px' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sergionfr/"
          target="_blank"
          className="transition-colors duration-300"
        >
          <i className="fa-brands fa-linkedin text-gray-400 hover:text-white transition-colors duration-300" style={{ fontSize: '32px' }} />
        </a>
      </div>
      <p className="text-zinc-400">© 2024 Sérgio Ribeiro</p>
    </div>
  );
};

export default Footer;
