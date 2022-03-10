import "../../src/assets/main.css";
import Dropdown from "./PyDropdown";
import Buttons from "./PyButton";
import Swiper from "./PySwiper";
import Collapse from "./PyCollapse";



const { PyDropdown, PyDropdownContent, PyDropdownItem } = Dropdown;
const { PyButton, PyButtonIcon, PyButtonGradient } = Buttons;
const { PySwiper, PySwiperSlide } = Swiper;
const { PyCollapse, PyCollapseContent } = Collapse;

export {
  PyButton,
  PyButtonIcon,
  PyButtonGradient,
  PyDropdown,
  PyDropdownContent,
  PyDropdownItem,
  PySwiper,
  PySwiperSlide,
  PyCollapse,
  PyCollapseContent,
};

export { default as PyInput } from "./PyInput";
export { default as PyAvatar } from "./PyAvatar";
export { default as PyTabPanels } from "./PyTabPanels";
export { default as PyTabPanel } from "./PyTabPanel";
export { default as PyTabs } from "./PyTabs";
export { default as PyTab } from "./PyTab";
export { default as PySelect } from "./PySelect";
export { default as PyLangSelector } from "./PyLangSelector";
export { default as PyMeta } from "./PyMeta";
export { default as PyIcon } from "./PyIcon";
export { default as PyCard } from "./PyCard";

export * from "../validation/validation-builder";
export * from "../validation/validation-composite";