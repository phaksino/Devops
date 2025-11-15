import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;