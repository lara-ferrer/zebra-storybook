import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  /**
   * Título del botón
   */
  label: string;
  /**
   * Acción al hacer clic en el botón
   */
  onClick?: () => void;
  /**
   * Tema del botón: 'light' o 'dark'
   */
  theme?: 'light' | 'dark';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  theme = 'light',
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className={[`${styles.button}`, theme === 'dark' ? styles.buttonDarkTheme : styles.buttonLightTheme].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

