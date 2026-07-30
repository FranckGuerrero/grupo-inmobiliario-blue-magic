export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  thumbnail: string;
  imageWidth: number;
  imageHeight: number;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'documentos-antes-de-comprar-propiedad',
    title: 'Documentos que debes revisar antes de comprar una propiedad',
    category: 'Compra segura',
    readTime: '4 min',
    image: '/images/blue-magic/guia-inmobiliaria/documentos-antes-de-comprar-una-propiedad.webp',
    thumbnail: '/images/blue-magic/guia-inmobiliaria/miniaturas/documentos-antes-de-comprar-una-propiedad-miniatura.webp',
    imageWidth: 678,
    imageHeight: 452,
    excerpt:
      'Una compra inmobiliaria requiere calma, verificación y claridad. Conoce los documentos esenciales antes de separar o firmar.',
    content: [
      'Antes de tomar una decisión de compra, verifica que la información del inmueble sea coherente con la documentación disponible y con la identidad de quien ofrece la propiedad.',
      'Revisa la partida registral actualizada, posibles cargas o gravámenes, pagos municipales, parámetros del inmueble y condiciones de entrega. Cuando corresponda, solicita apoyo legal especializado.',
      'También conviene confirmar por escrito el precio, la forma de pago, los bienes incluidos y los plazos. Una asesoría ordenada reduce riesgos y ayuda a comparar alternativas con mayor objetividad.',
    ],
  },
  {
    slug: 'como-prepararte-primer-departamento',
    title: 'Cómo prepararte para comprar tu primer departamento',
    category: 'Primera vivienda',
    readTime: '5 min',
    image: '/images/blue-magic/guia-inmobiliaria/como-prepararte-para-comprar-tu-primer-departamento.webp',
    thumbnail: '/images/blue-magic/guia-inmobiliaria/miniaturas/como-prepararte-para-comprar-tu-primer-departamento-miniatura.webp',
    imageWidth: 1600,
    imageHeight: 750,
    excerpt:
      'Define presupuesto, distrito, necesidades y financiamiento para iniciar una búsqueda realista y sostenible.',
    content: [
      'Empieza calculando un presupuesto integral. Además del precio de compra, considera cuota inicial, evaluación crediticia, gastos notariales, registrales, mudanza y mantenimiento mensual.',
      'Luego prioriza distritos según conectividad, seguridad, cercanía al trabajo o estudios, servicios y potencial de valorización. Elegir bien la zona suele ser más importante que enamorarse de una sola fotografía.',
      'Finalmente, prepara una lista breve de requisitos indispensables y otros negociables. Así podrás comparar propiedades sin perder de vista tus objetivos financieros y familiares.',
    ],
  },
  {
    slug: 'consejos-vender-propiedad',
    title: 'Consejos para vender tu propiedad con mejor presentación',
    category: 'Venta inmobiliaria',
    readTime: '4 min',
    image: '/images/blue-magic/guia-inmobiliaria/consejos-para-vender-tu-propiedad.webp',
    thumbnail: '/images/blue-magic/guia-inmobiliaria/miniaturas/consejos-para-vender-tu-propiedad-miniatura.webp',
    imageWidth: 655,
    imageHeight: 295,
    excerpt:
      'Una estrategia clara de precio, fotografía y seguimiento puede atraer consultas de mayor calidad.',
    content: [
      'Antes de publicar, ordena, limpia, ilumina y retira elementos personales que distraigan. Una presentación neutra ayuda a que el comprador imagine el espacio como propio.',
      'Define un precio competitivo comparando propiedades similares por ubicación, área, antigüedad, estado y características. Un precio sin sustento puede reducir visitas o prolongar innecesariamente la venta.',
      'Prepara una ficha clara con metraje, distribución, documentos, mantenimiento y condiciones. Responder rápido y filtrar adecuadamente convierte consultas en visitas con mayor intención de compra.',
    ],
  },
  {
    slug: 'que-revisar-antes-alquilar',
    title: 'Qué debes revisar antes de alquilar una propiedad',
    category: 'Alquiler',
    readTime: '3 min',
    image: '/images/blue-magic/guia-inmobiliaria/que-revisar-antes-de-alquilar-una-propiedad.webp',
    thumbnail: '/images/blue-magic/guia-inmobiliaria/miniaturas/que-revisar-antes-de-alquilar-una-propiedad-miniatura.webp',
    imageWidth: 470,
    imageHeight: 337,
    excerpt:
      'Evalúa contrato, pagos, mantenimiento, inventario y reglas del inmueble antes de asumir el compromiso.',
    content: [
      'Antes de alquilar, revisa el estado del inmueble, servicios, mantenimiento, reglas del edificio o condominio y condiciones de uso. Registra por escrito cualquier observación previa a la entrega.',
      'Aclara el monto de renta, garantía, forma de pago, reajustes, plazo, penalidades y responsabilidades de mantenimiento. Evita acuerdos importantes únicamente verbales.',
      'Confirma la identidad y facultades de quien arrienda, y lee el contrato completo antes de firmar. Una comunicación clara desde el inicio reduce conflictos entre propietario e inquilino.',
    ],
  },
];
