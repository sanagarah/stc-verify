import { categories, headerSideIcons } from "src/data/constants";
import SearchBox from "src/components/common/search-box";
import Tooltip from "src/components/common/tooltip";
import Chip from "src/components/common/chip";
import Box from "src/components/common/box";

const GoogleLogo = require("src/assets/images/google-logo.png");

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 h-fit py-4 px-8 bg-white shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={GoogleLogo} alt="Google Logo" className="w-1/12 me-4" />
          <SearchBox />
        </div>
        <div className="flex w-1/6 justify-between items-center px-3">
          {headerSideIcons.map((icons, index) => (
            <Tooltip key={index} text={icons.toolTipText} isSearchIcon={false}>
              <div className="text-gray-400">{icons.icon}</div>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 ms-44">
        <div className="flex">
          {categories.map((category, index) => (
            <Chip key={index} text={category} isSearchCategory={true} />
          ))}
        </div>
        <div>
          <Box text="All filters	&#x25BE;" />
          <span className="text-gray-300">{" | "}</span>
          <Box text="Tools" />
        </div>
        <Box text="SafeSearch on" />
      </div>
    </header>
  );
}
