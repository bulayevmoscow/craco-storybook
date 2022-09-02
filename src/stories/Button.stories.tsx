import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@ui/kek/src/stories/Button';


// const Button:React.FC = () => <h1>hi!</h1>
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof Mock> = (args) => <Button {...args} />;

export const Secondary = Template.bind({});

// INFO
// https://www.google.com/search?q=Is+this+the+principal+call+to+action+on+the+page%3F+import+components+from+node_modules&oq=Is+this+the+principal+call+to+action+on+the+page%3F+import+components+from+node_modules&aqs=chrome..69i57j69i64.11518j0j4&sourceid=chrome&ie=UTF-8