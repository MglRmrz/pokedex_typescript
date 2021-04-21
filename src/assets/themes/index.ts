

/**
 * @description Aquí va a ir toda la paleta e colores de la aplicación, todos los colores iran aquí
 * @param opacity Opacidad del color, apra jugar con la transparencia del mismo. 0 = invisible, 1 = visible. Default: 1
 */
export const theme = (opacity: number = 1) => (
    {
        primary: `rgba(255, 0, 0, ${opacity})`,
        white: `rgba(255, 255, 255, ${opacity})`
    }
)