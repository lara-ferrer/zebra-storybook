import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título de la tarjeta' },
    buttonLabel: { control: 'text', description: 'Etiqueta del botón' },
    onButtonClick: { action: 'buttonClicked', description: 'Función al hacer clic en el botón' },
    showButton: { control: 'boolean', description: 'Deshabilita el botón si es verdadero' },
    theme: { control: 'radio', options: ['light', 'dark'], description: 'Tema de la tarjeta' },
    children: { control: 'text', description: 'Contenido principal de la tarjeta' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightThemeWithoutButton: Story = {
  args: {
    title: 'Proyectos activos',
    buttonLabel: 'Ver más',
    onButtonClick: () => alert('Botón clickeado!'),
    showButton: false,
    theme: 'light',
    children: 'Este es el contenido principal de la tarjeta en tema claro con el botón activo.',
  },
};

export const LightThemeWithButton: Story = {
  args: {
    title: 'Proyectos activos',
    buttonLabel: 'Ver más',
    onButtonClick: () => alert('Botón clickeado!'),
    showButton: true,
    theme: 'light',
    children: 'Este es el contenido principal de la tarjeta en tema claro con el botón deshabilitado.',
  },
};

export const DarkThemeWithoutButton: Story = {
  args: {
    title: 'Proyectos activos',
    buttonLabel: 'Ver más',
    onButtonClick: () => alert('Botón clickeado!'),
    showButton: false,
    theme: 'dark',
    children: 'Este es el contenido principal de la tarjeta en tema oscuro con el botón activo.',
  },
};

export const DarkThemeWithButton: Story = {
  args: {
    title: 'Proyectos activos',
    buttonLabel: 'Ver más',
    onButtonClick: () => alert('Botón clickeado!'),
    showButton: true,
    theme: 'dark',
    children: 'Este es el contenido principal de la tarjeta en tema oscuro con el botón deshabilitado.',
  },
};

