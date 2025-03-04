import React from "react";
import ExpandableInfo from "./ExpandableInfo";

export default {
  title: "Components/ExpandableInfo",
  component: ExpandableInfo,
  argTypes: {
    numChildren: {
      control: { type: "number", min: 1, max: 5 },
      description: "Number of children elements to display",
    },
    childrenContent: {
      control: { type: "array" },
      description: "Content for each child div",
    },
    childrenTitles: {
      control: { type: "array" },
      description: "Title for each child element",
    },
  },
};

const Template = (args) => <ExpandableInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Click to Expand",
  numChildren: 3,
  childrenTitles: ["Item One", "Item Two", "Item Three"],
  childrenContent: ["First Item", "Second Item", "Third Item"],
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: "More Information",
  numChildren: 5,
  childrenTitles: ["Red Text", "Button", "Image", "Bold Text", "List"],
  childrenContent: [
    <p style={{ color: "red" }}>This is a paragraph.</p>,
    <button>Click Me</button>,
    <img src="https://via.placeholder.com/50" alt="Placeholder" />,
    <strong>Bold Text</strong>,
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>,
  ],
};
