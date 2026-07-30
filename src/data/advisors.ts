export interface Advisor {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneWhatsApp: string;
  email?: string;
}

export const advisors: Advisor[] = [
  {
    name: 'Juan Benavides Gamboa',
    role: 'Asesor inmobiliario',
    phoneDisplay: '+51 982 844 664',
    phoneWhatsApp: '51982844664',
    email: 'jbgaplicaciones@gmail.com',
  },
  {
    name: 'Gerson Villegas Colchado',
    role: 'Asesor inmobiliario',
    phoneDisplay: '+51 986 647 287',
    phoneWhatsApp: '51986647287',
  },
];