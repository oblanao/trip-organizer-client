import { Menu, Tooltip, MenuButton } from '../../components';
import { SayGoodbye, SayHello } from '../../components/Demo';

const DashboardScreen = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
      <div className="flex items-center mb-12">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Dashboard</h3>
          <Tooltip placement="bottom">Just another tooltip</Tooltip>
        </div>
        <MenuButton />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded shadow p-4 space-y-4">
          <p className="text-gray-800">
            Abc
          </p>
          <p className="text-gray-800">
            Def
          </p>
          <p className="text-gray-800">
            Ghi
          </p>
          <SayHello />
        </div>
        <div className="bg-white rounded shadow p-4 space-y-4">
          <p className="text-gray-800">
            Jkl
          </p>
          <p className="text-gray-800">
            Mno
          </p>
          <p className="text-gray-800">
            Pqr
          </p>
          <SayGoodbye />
        </div>
      </div>
    </main>
  </div>
);

export default DashboardScreen;
