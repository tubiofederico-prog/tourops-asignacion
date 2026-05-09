export const vehiculos = [
  {
    id: 'VEH001',
    tipo: 'Sedan',
    placa: 'ABC-123',
    capacidad: 4,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: false,
    anio: 2022
  },
  {
    id: 'VEH002',
    tipo: 'Sedan',
    placa: 'ABC-124',
    capacidad: 4,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2023
  },
  {
    id: 'VEH003',
    tipo: 'Van 9 pax',
    placa: 'VAN-001',
    capacidad: 9,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2021
  },
  {
    id: 'VEH004',
    tipo: 'Van 9 pax',
    placa: 'VAN-002',
    capacidad: 9,
    estado: 'mantenimiento',
    serviciosAsignados: [],
    restricciones: ['en_mantenimiento'],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2020
  },
  {
    id: 'VEH005',
    tipo: 'Minibus 15 pax',
    placa: 'MNB-001',
    capacidad: 15,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2022
  },
  {
    id: 'VEH006',
    tipo: 'Minibus 15 pax',
    placa: 'MNB-002',
    capacidad: 15,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2021
  },
  {
    id: 'VEH007',
    tipo: 'Bus 30 pax',
    placa: 'BUS-001',
    capacidad: 30,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: true,
    anio: 2019
  },
  {
    id: 'VEH008',
    tipo: 'Camioneta 4x4',
    placa: '4X4-001',
    capacidad: 7,
    estado: 'disponible',
    serviciosAsignados: [],
    restricciones: [],
    aireAcondicionado: true,
    equipoAudio: true,
    wifi: false,
    anio: 2023
  }
]

export const getVehiculos = () => vehiculos
