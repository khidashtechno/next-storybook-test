import {Meta, StoryObj} from '@storybook/react'
import {ProfileForm} from '@/components/custom/ProfileForm'
import {within, userEvent, expect} from '@storybook/test'

const meta: Meta<typeof ProfileForm> = {
    title: 'Templates/Form',
    component: ProfileForm,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    play: async ({canvasElement}) => {
       const canvas = within(canvasElement)

        // const  submitBtn = canvas.getByText('Submit')
        const  submitBtn = canvas.getByText('Submit')
        const usernameInput = canvas.getByLabelText(/user/i)

        await expect(submitBtn).toBeInTheDocument()
        await expect(usernameInput).toBeInTheDocument()
    }
}

export const EmptySubmit: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const submitBtn = canvas.getByText('Submit')
        const usernameInput = canvas.getByLabelText(/user/i)

        await userEvent.click(submitBtn)
        await expect(usernameInput).toBeInTheDocument()
    }
}

export const InvalidSubmit: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const submitBtn = canvas.getByText('Submit')
        const usernameInput = canvas.getByLabelText(/user/i)

        // Test for minimum length
        await userEvent.type(usernameInput, 'a')
        await userEvent.click(submitBtn)
        await expect(canvas.getByText('Username must be at least 2 characters long')).toBeInTheDocument()

        // Test for maximum length
        await userEvent.clear(usernameInput)
        await userEvent.type(usernameInput, 'a'.repeat(51))
        await userEvent.click(submitBtn)
        await expect(canvas.getByText('Username must be at most 50 characters long')).toBeInTheDocument()
    }
}

