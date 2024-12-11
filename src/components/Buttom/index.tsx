interface IButton {
  nameButtom: string;
  backgroundColor?: string; // Color de fondo (opcional)
  textColor?: string; // Color del texto (opcional)
  fontSize?: string; // Tamaño de la fuente (opcional)
  width?: string; // Ancho del botón (opcional)
  height?: string; // Altura del botón (opcional)
  borderColor?: string; // Color del borde (opcional)
  borderWidth?: string; // Grosor del borde (opcional)
}

const Buttom = ({
  nameButtom,
  backgroundColor = 'bg-black', // Valor por defecto de fondo
  textColor = 'text-white', // Valor por defecto de color de texto
  fontSize = 'text-base', // Valor por defecto de tamaño de texto
  width = 'w-full', // Valor por defecto de ancho
  height = 'h-full', // Valor por defecto de altura
  borderColor = 'border-transparent', // Valor por defecto del borde (transparente)
  borderWidth = 'border-2', // Valor por defecto del grosor del borde (2px)
}: IButton) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${fontSize} ${width} ${height} ${borderColor} ${borderWidth} font-satoshi-regular rounded-full p-2 text-center`}
    >
      {nameButtom}
    </button>
  );
};

export default Buttom;