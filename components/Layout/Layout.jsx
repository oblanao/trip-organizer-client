import { Header } from '.';
import { Menu } from '..';

const Layout = ({ children }) => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
