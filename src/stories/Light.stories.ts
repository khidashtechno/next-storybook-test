import {Meta, StoryObj} from '@storybook/react'
import React from 'react';

import {Light} from "@/components/custom/Light";

 const meta: Meta<typeof  Light>={
    title: 'Buttons/Light',
    component: Light,
     tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

/** Basic color with green selection*/
export const Base: Story = {
}

/** Variant color with Red selection*/
export const Red: Story = {
     args:{
        color: 'red'
     }
}

/** Variant color with Yellow selection*/
export const Yellow: Story = {
    args:{
        color: 'yellow'
    }
}
