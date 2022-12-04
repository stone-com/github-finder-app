const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='p-10 footer bg-neutral text-primary-content footer-center'>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
