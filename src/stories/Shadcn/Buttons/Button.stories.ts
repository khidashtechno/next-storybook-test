import  {Meta, StoryObj} from '@storybook/react'
import {action} from "@storybook/addon-actions"
import {Button} from "@/components/ui/button";


 const meta: Meta<typeof  Button>={
    title: 'Components/UI/Button',
    component: Button,
     tags: ['autodocs'],
     parameters: {
        layout: 'centered',
     },
     argTypes:{
        variant: {
            control: 'select',
            description: 'The variant of the button',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            description: 'The size of the button',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
            description: 'If the button is disabled',
        },
        asChild: {
            control: 'boolean',
            description: 'If the button should be rendered',
     },
        className: {
            control: 'text',
            description: 'The class name of the button',
        },
        children: {
            control: 'text',
            description: 'The children of the button',
        },
        onClick: {
            action: 'clicked',
            description: 'The click handler of the button',
        },
}}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
args:{
    variant: "destructive",
    size: 'default',
    disabled: false,
    asChild: false,
    className: 'shadow-md',
    children: 'Button',
    onClick: action('Default click'),
}
}

export const Secondary: Story = {
args:{
    variant: "secondary",
    size: 'default',
    disabled: false,
    asChild: false,
    className: 'shadow-md',
    children: 'Button',
    onClick: action('Secondary click'),
}}

export const Outline: Story = {
args:{
    variant: "outline",
    size: 'default',
    disabled: false,
    asChild: false,
    className: 'shadow-md',
    children: 'Button',
    onClick: action('Outline click'),
}}

export const Ghost: Story = {
args:{
    variant: "ghost",
    size: 'default',
    disabled: false,
    asChild: false,
    className: 'shadow-md',
    children: 'Button',
    onClick: action('Ghost click'),
}}

export const Link: Story = {
args:{
    variant: "link",
    size: 'default',
    disabled: false,
    asChild: false,
    className: 'shadow-md',
    children: 'Button',
    onClick: action('Link click'),
}}
