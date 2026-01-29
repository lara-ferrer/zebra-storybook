import React from 'react';
import styles from './Card.module.css';
import { Button } from '../Button/Button'; // Usamos el componente Button ya creado

export interface CardProps {
  /**
   * Título de la card
   */
  title: string;
  /**
   * Contenido principal de la card
   */
  children: React.ReactNode;
  /**
   * Texto del botón
  */
  buttonLabel: string;
  /**
   * Función al hacer clic en el botón
  */
  onButtonClick: () => void;
  /**
   * Muestra u oculta el botón
  */
  showButton?: boolean;
  /**
   * Tema de la card: 'light' o 'dark'
  */
  theme?: 'light' | 'dark';
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  buttonLabel,
  onButtonClick,
  showButton = false,
  theme = 'light',
}) => {
  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.cardDarkTheme : styles.cardLightTheme}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {showButton && <Button
          label={buttonLabel}
          onClick={onButtonClick}
          theme={theme}
        /> }
      </div>
      {children}
    </div>
  );
};

export default Card;

