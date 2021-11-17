import { Tooltip } from 'react-bootstrap';
import { MenuButton } from '..';

const Header = () => {
  return (
    <div className="flex items-center mb-12">
      <div className="flex flex-1">
        <h3 className="text-2xl font-semibold">Trip Organizer</h3>
        <Tooltip placement="bottom">Just another tooltip</Tooltip>
      </div>
      <MenuButton />
    </div>
  );
};

export default Header;
