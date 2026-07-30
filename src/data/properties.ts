export type OperationType = 'Venta' | 'Alquiler';
export type PropertyStatus = 'Disponible' | 'Reservada' | 'Vendida' | 'Alquilada';

export interface Property {
  code: string;
  slug: string;
  title: string;
  operation: OperationType;
  status: PropertyStatus;
  type: string;
  district: string;
  zone: string;
  price: string;
  priceValue: number;
  priceCurrency: 'USD' | 'PEN';
  area: string;
  landArea?: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  thumbnail: string;
  imageWidth: number;
  imageHeight: number;
  featured: boolean;
  tags: string[];
  summary: string;
  description: string;
  highlights: string[];
}

export const properties: Property[] = [
  {
    code: 'BM-001',
    slug: 'casa-contemporanea-la-molina',
    title: 'Casa contemporánea con terraza en La Molina',
    operation: 'Venta',
    status: 'Disponible',
    type: 'Casa',
    district: 'La Molina',
    zone: 'Zona residencial',
    price: 'US$ 420,000',
    priceValue: 420000,
    priceCurrency: 'USD',
    area: '310 m² construidos',
    landArea: '280 m² de terreno',
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    image: '/images/blue-magic/propiedades/propiedad-01.webp',
    thumbnail: '/images/blue-magic/propiedades/miniaturas/propiedad-01-miniatura.webp',
    imageWidth: 960,
    imageHeight: 540,
    featured: true,
    tags: ['Terraza', 'Arquitectura moderna', 'Zona tranquila'],
    summary:
      'Una vivienda amplia y luminosa para familias que buscan privacidad, diseño contemporáneo y conexión con áreas verdes.',
    description:
      'Casa de líneas modernas ubicada en una zona residencial de La Molina. Su distribución integra sala, comedor y terraza para disfrutar reuniones familiares, además de ambientes privados cómodos y funcionales.',
    highlights: [
      'Sala comedor con iluminación natural y salida a terraza',
      'Dormitorio principal con baño incorporado y clóset',
      'Cocina amplia con zona de servicio y lavandería',
      'Cochera para dos vehículos y acceso independiente',
    ],
  },
  {
    code: 'BM-002',
    slug: 'casa-familiar-condominio-chorrillos',
    title: 'Casa familiar en condominio privado de Chorrillos',
    operation: 'Venta',
    status: 'Disponible',
    type: 'Casa',
    district: 'Chorrillos',
    zone: 'Condominio residencial',
    price: 'S/ 495,000',
    priceValue: 495000,
    priceCurrency: 'PEN',
    area: '118 m² construidos',
    landArea: '105 m² de terreno',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    image: '/images/blue-magic/propiedades/propiedad-02.webp',
    thumbnail: '/images/blue-magic/propiedades/miniaturas/propiedad-02-miniatura.webp',
    imageWidth: 750,
    imageHeight: 562,
    featured: true,
    tags: ['Condominio', 'Familiar', 'Seguridad'],
    summary:
      'Alternativa funcional para una familia joven que busca tranquilidad, áreas organizadas y acceso controlado.',
    description:
      'Vivienda compacta dentro de un entorno residencial de acceso controlado. Aprovecha eficientemente cada ambiente y ofrece una distribución práctica para la vida diaria.',
    highlights: [
      'Tres dormitorios con ventilación natural',
      'Sala comedor integrada y cocina funcional',
      'Patio posterior para lavandería o zona social',
      'Condominio con control de ingreso y espacios comunes',
    ],
  },
  {
    code: 'BM-003',
    slug: 'casa-urbana-tres-niveles-san-borja',
    title: 'Casa urbana de tres niveles en San Borja',
    operation: 'Venta',
    status: 'Reservada',
    type: 'Casa',
    district: 'San Borja',
    zone: 'Cerca de avenidas principales',
    price: 'US$ 295,000',
    priceValue: 295000,
    priceCurrency: 'USD',
    area: '205 m² construidos',
    landArea: '120 m² de terreno',
    bedrooms: 4,
    bathrooms: 3,
    parking: 1,
    image: '/images/blue-magic/propiedades/propiedad-03.webp',
    thumbnail: '/images/blue-magic/propiedades/miniaturas/propiedad-03-miniatura.webp',
    imageWidth: 720,
    imageHeight: 532,
    featured: true,
    tags: ['Tres niveles', 'Ubicación estratégica', 'Uso familiar'],
    summary:
      'Propiedad con distribución vertical y excelente conexión urbana, ideal para vivienda familiar o uso mixto autorizado.',
    description:
      'Casa de tres niveles en una zona conectada de San Borja. Sus ambientes permiten separar áreas sociales, privadas y de trabajo, ofreciendo versatilidad para familias con distintas rutinas.',
    highlights: [
      'Primer nivel con sala comedor, cocina y cochera',
      'Segundo nivel con dormitorios familiares',
      'Tercer nivel adaptable como estudio, terraza o sala de reuniones',
      'Acceso rápido a comercios, parques y transporte',
    ],
  },
  {
    code: 'BM-004',
    slug: 'casa-independiente-surco',
    title: 'Casa independiente con jardín frontal en Surco',
    operation: 'Alquiler',
    status: 'Disponible',
    type: 'Casa',
    district: 'Santiago de Surco',
    zone: 'Urbanización residencial',
    price: 'S/ 5,200 mensuales',
    priceValue: 5200,
    priceCurrency: 'PEN',
    area: '190 m² construidos',
    landArea: '180 m² de terreno',
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    image: '/images/blue-magic/propiedades/propiedad-04.webp',
    thumbnail: '/images/blue-magic/propiedades/miniaturas/propiedad-04-miniatura.webp',
    imageWidth: 750,
    imageHeight: 562,
    featured: true,
    tags: ['Jardín', 'Independiente', 'Cochera doble'],
    summary:
      'Casa cómoda y bien distribuida para quienes desean alquilar en una zona residencial consolidada de Surco.',
    description:
      'Vivienda independiente con jardín frontal, espacios familiares y ambientes versátiles. Es una alternativa atractiva para quienes priorizan privacidad y cercanía a servicios urbanos.',
    highlights: [
      'Jardín frontal y acceso independiente',
      'Tres dormitorios y sala familiar',
      'Cocina con comedor de diario y lavandería',
      'Cochera para dos vehículos',
    ],
  },
];

export const featuredProperties = properties.filter((property) => property.featured);
