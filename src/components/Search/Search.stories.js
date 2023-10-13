import { Search } from ".";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    state: {
      options: ["filled", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "filled",
    topbar: true,
    mic: true,
    clearIcon: true,
    className: {},
    contentClassName: {},
    magnifyingglassMagnifyingglassClassName: {},
    magnifyingglassMagnifyingglassClassNameOverride: {},
    placeholderLabelClassName: {},
    text: "Placeholder",
  },
};
