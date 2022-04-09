import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Title basic',
  description: 'Description basic'
}
export const Default: Story = (args) => <Main {...args} />
