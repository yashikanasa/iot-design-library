import { fn } from '@storybook/test';
import { Button } from "../index.js"; 

export default {
  title: "IOT Design/Button", 
  component: Button, 
  parameters: {
  layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };
  
