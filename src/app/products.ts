export interface Product {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  detalles: string;
  img : string;
}

export const products = [
  {
    id: 1,
    nombre: 'Motocilceta Vogle',
    img: 'assets/moto.jpg',
    precio: 5799,
    descripcion: 'Un vehículo moderno y confortable.',
    detalles: "La nueva 650 VOGE 650DS está destinada a convertirse en uno de los principales referentes dentro del segmento Trail Aventura gracias a su gran versatilidad y calidad con componentes de primeras marcas. A todo esto se une la extraordinaria robustez y fiabilidad de su contrastada mecánica monocilíndrica avalada por la victoria en 2 ediciones consecutivas del famoso Rally París-Dakar.",
    alt: 'Fotografia de motocicleta.'
  },
  {
    id: 2,
    nombre: 'Iphone Mini Purple',
    img: 'assets/iphonemini.jpg',
    precio: 699,
    descripcion: 'Nuevo iphone mini efecto púrpura.',
    detalles:"En el Iphone Mini Purple, el procesador de la cámara trasera de 12 MP tiene una inteligencia incluso mayor que en modelos anteriores, lo cual facilita hacer fotos a un objetivo en movimiento.El Iphone Mini Purple es hasta 70% más rápido que sus antecesores, y su chip ultra potente A11 Bionic garantiza un funcionamiento eficaz.",
    alt: 'Fotografia de teléfono móvil.'

  },
  {
    id: 3,
    nombre: 'North Face ',
    img: 'assets/abrigo.jpg',
    precio: 399,
    descripcion: 'Abrigo para temperaturas extremas',
    detalles:"Afronte todas las condiciones con un estilo premium con esta parka McMurdo 2 para hombre de The North Face. Inspo 'de la estación de investigación en la Antártida, esta chaqueta viene en una combinación de colores negros y está hecha de una mezcla duradera de nailon y poliéster repelente al agua. Acolchado con un relleno de plumón de ganso 550 para una máxima calidez cuando llega el frío, cuenta con un cierre de cremallera completo y una capucha con cremallera con un ribete de piel sintética desmontable. Con bolsillos con cremallera y amplios bolsillos con solapa en todas partes, este abrigo está rematado con la marca de The North Face en el pecho y en el reverso del hombro. Nuestro modelo mide 5'11 con un pecho de 38 y usa una talla mediana.",
    alt: 'Fotografia de abrigo.'
  },

];
