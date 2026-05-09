export const reglas = [
  {
    id: 'R001',
    categoria: 'Capacidad de Vehículos',
    nombre: 'Sedan máximo 4 pasajeros',
    descripcion: 'Los sedanes pueden transportar máximo 4 pasajeros',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R002',
    categoria: 'Capacidad de Vehículos',
    nombre: 'Van 9 pax para grupos pequeños',
    descripcion: 'Las vans de 9 pax se usan para grupos de 5-9 pasajeros',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R003',
    categoria: 'Capacidad de Vehículos',
    nombre: 'Minibus 15 pax para grupos medianos',
    descripcion: 'Los minibus se usan para grupos de 10-15 pasajeros',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R004',
    categoria: 'Capacidad de Vehículos',
    nombre: 'Bus 30 pax para grupos grandes',
    descripcion: 'Los buses se usan para grupos de 16-30 pasajeros',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R005',
    categoria: 'Compatibilidad Servicio-Vehículo',
    nombre: 'Traslados aeropuerto con vehículos de calidad',
    descripcion: 'Los traslados aeropuerto deben usar vehículos modelo 2020+',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R006',
    categoria: 'Compatibilidad Servicio-Vehículo',
    nombre: 'Excursiones requieren minibus o bus',
    descripcion: 'Las excursiones deben usar minibus (15+) o buses',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R007',
    categoria: 'Tiempos Mínimos',
    nombre: 'Mínimo 30 min entre servicios del mismo chofer',
    descripcion: 'Un chofer debe tener al menos 30 minutos entre servicios',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R008',
    categoria: 'Tiempos Mínimos',
    nombre: 'Descanso obligatorio cada 4 horas',
    descripcion: 'Los choferes requieren descanso de 15 min cada 4 horas',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R009',
    categoria: 'Requisitos Especiales',
    nombre: 'Requiere Guía Oficial',
    descripcion: 'Los servicios en parques nacionales requieren guía oficial certificado',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R010',
    categoria: 'Requisitos Especiales',
    nombre: 'Idioma según cliente',
    descripcion: 'El chofer debe hablar el idioma del cliente o tener guía bilingüe',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R011',
    categoria: 'Requisitos Especiales',
    nombre: 'Cartel de bienvenida para VIP',
    descripcion: 'Los clientes VIP requieren cartel de bienvenida personalizado',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R012',
    categoria: 'Frontera',
    nombre: 'Chofer con experiencia en frontera',
    descripcion: 'Servicios que cruzan frontera requieren chofer experimentado',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R013',
    categoria: 'Frontera',
    nombre: 'Documentos en orden',
    descripcion: 'Vehículo debe tener papeles en regla para cruzar frontera',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R014',
    categoria: 'Accesibilidad',
    nombre: 'Accesibilidad para PMR',
    descripcion: 'Servicios con pasajeros con movilidad reducida requieren vehículo accesible',
    activa: true,
    prioridad: 'media'
  },
  {
    id: 'R015',
    categoria: 'Restricciones Operativas',
    nombre: 'No usar vehículos en mantenimiento',
    descripcion: 'Los vehículos en mantenimiento no pueden asignarse',
    activa: true,
    prioridad: 'alta'
  },
  {
    id: 'R016',
    categoria: 'Restricciones Operativas',
    nombre: 'Solo choferes disponibles',
    descripcion: 'No asignar choferes en franco ni con conflicto de horario',
    activa: true,
    prioridad: 'alta'
  }
]

export const getReglas = () => reglas
