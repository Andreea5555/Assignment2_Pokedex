import { ReactNode } from 'react';
import Navbar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

//this is just the Layout some everything looks nice and tidy
const Layout = ({ children }: LayoutProps) => {
  return (
     <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">
        {children /*applying this to all of the pages*/}
      </main>
    </div>
  );
};

export default Layout;