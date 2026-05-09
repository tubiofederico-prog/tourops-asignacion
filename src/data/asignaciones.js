export let asignaciones = []

export const asignarServicio = (servicioId, choferId, vehiculoId, nivelConfianza = 85) => {
  const asignacion = {
    id: `ASG-${Date.now()}`,
    servicioId,
    choferId,
    vehiculoId,
    nivelConfianza,
    estado: 'asignado',
    motivo: 'Asignación automática por algoritmo',
    timestamp: new Date().toISOString()
  }
  asignaciones.push(asignacion)
  return asignacion
}

export const limpiarAsignaciones = () => {
  asignaciones = []
}

export const getAsignaciones = () => asignaciones

export const actualizarAsignacion = (servicioId, choferId, vehiculoId) => {
  const idx = asignaciones.findIndex(a => a.servicioId === servicioId)
  if (idx >= 0) {
    asignaciones[idx] = {
      ...asignaciones[idx],
      choferId,
      vehiculoId,
      estado: 'revisado',
      motivo: 'Ajuste manual por operador',
      timestamp: new Date().toISOString()
    }
  }
}

export const aprobarAsignaciones = () => {
  asignaciones.forEach(a => a.estado = 'aprobado')
}
