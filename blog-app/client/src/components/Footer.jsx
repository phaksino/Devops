const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-gray-600">
            © {currentYear} MERN Blog. Built with ❤️ using MongoDB, Express, React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;