# TourOps - Asignación Operativa Turística

Prototipo visual funcional para un software de asignación operativa de servicios turísticos. Sistema inteligente para gestionar traslados, excursiones, choferes y vehículos con algoritmo automático de asignación.

## 🎯 Características

- **Dashboard Operativo**: Métricas clave, alertas en tiempo real, distribución horaria de servicios
- **Carga de Servicios**: Simulación de drag & drop para importar servicios desde Excel/CSV
- **Gestión de Choferes**: Grid de perfiles con idiomas, habilidades, ratings y disponibilidad
- **Gestión de Vehículos**: Catálogo de vehículos con capacidades y restricciones
- **Motor de Reglas**: Configuración de 16 reglas operativas agrupadas por categoría
- **Algoritmo de Asignación**: Procesamiento automático que genera asignaciones con nivel de confianza
- **Escala Operativa**: Tabla completa con edición manual y aprobación de asignaciones
- **Ajuste y Mejora**: Historial de correcciones y panel de aprendizaje del algoritmo
- **Integraciones Futuras**: Roadmap de funcionalidades planeadas

## 📊 Datos Mock Incluidos

- **12 servicios** realistas de turismo en Iguazú
- **8 choferes** con idiomas (español, portugués, inglés) y habilidades especiales
- **8 vehículos** de diferentes capacidades (Sedan, Van 9p, Minibus 15p, Bus 30p)
- **16 reglas operativas** configurables
- Algoritmo de simulación con generación de asignaciones

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS v3
- **Routing**: React Router DOM v6
- **Íconos**: Lucide React
- **Componentes**: Reutilizables y modularizados

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tubiofederico/tourops-asignacion.git

# Instalar dependencias
cd tourops-asignacion
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📦 Build para Producción

```bash
npm run build
npm run preview
```

## 📋 Estructura del Proyecto

```
src/
├── pages/              # 9 módulos principales
├── components/
│   ├── layout/        # Sidebar, Header, Layout
│   ├── ui/            # Componentes base (Button, Card, Modal, etc)
│   └── features/      # Componentes especializados
├── data/              # Mock data (servicios, choferes, vehículos, reglas)
├── App.jsx            # Router principal
└── main.jsx           # Entry point
```

## 🎨 Diseño

- Interfaz SaaS B2B premium
- Paleta: Blanco/Slate con acentos en Azul y Violeta
- Responsive design (optimizado para desktop)
- Componentes modernos con Tailwind CSS

## 💡 Cómo Usar

1. **Explora el Dashboard** para ver métricas operativas
2. **Carga Servicios** - Simula drag & drop de archivo
3. **Revisa Choferes y Vehículos** - Catálogos completos
4. **Ejecuta el Algoritmo** - Genera asignaciones automáticas
5. **Ajusta Manualmente** - Edita asignaciones si es necesario
6. **Aprueba la Escala** - Finaliza las asignaciones del día

## 📝 Licencia

Proyecto privado - Todos los derechos reservados

## 👤 Autor

Federico Tubio (tubiofederico@gmail.com)

## 🔮 Futuras Integraciones

- Google Maps / Waze para optimización de rutas
- App Mobile para choferes
- Dashboard Real-Time
- SMS/WhatsApp automático
- Integración con ERP/Motor de Reservas
