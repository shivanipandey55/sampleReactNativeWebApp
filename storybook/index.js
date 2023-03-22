import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { loadStories } from "./storyLoader";
import { withKnobs } from "@storybook/addon-knobs";
addDecorator(withKnobs);
// import stories
configure(() => {
  // require("./stories");
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});
export default StorybookUIRoot;
