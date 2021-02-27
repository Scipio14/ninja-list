const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>Ninjalist {date}&copy;</footer>
    </div>
  );
};

export default Footer;
