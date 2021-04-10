import { Menu, MenuButton, Tooltip } from '../../components';
import { Logout, Profile } from '../../components/Demo';

const ProfileScreen = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
      <div className="flex items-center mb-12">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Profile</h3>
          <Tooltip placement="bottom">Just another tooltip</Tooltip>
        </div>
        <MenuButton />
      </div>
      <h1 className="font-semibold mb-4">My profile</h1>
      <Profile />
      <Logout />
    </main>
  </div>
);

export default ProfileScreen;
