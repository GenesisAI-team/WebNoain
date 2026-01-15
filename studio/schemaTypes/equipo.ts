// studio/schemaTypes/equipo.ts
export default {
  name: 'equipo',
  title: 'Equipos',
  type: 'document',
  fields: [
    {name: 'idEquipo', title: 'ID del Equipo (Ej: SEN-FEM-A)', type: 'string'},
    {name: 'categoria', title: 'Categoría', type: 'string'},
    {name: 'liga', title: 'Liga', type: 'string'},
    {name: 'entrenador', title: 'Entrenador/a', type: 'string'},
    {name: 'pista', title: 'Pista/Ubicación', type: 'string'},
    {
      name: 'horarios',
      title: 'Horarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'dia', title: 'Día', type: 'string'},
            {name: 'hora', title: 'Hora', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'plantilla',
      title: 'Plantilla (Jugadores)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'jugador',
          fields: [
            {name: 'dorsal', title: 'Dorsal', type: 'number'},
            {name: 'nombre', title: 'Nombre', type: 'string'},
            {name: 'posicion', title: 'Posición', type: 'string'},
            {name: 'capitan', title: '¿Es Capitán/a?', type: 'boolean', initialValue: false},
            {name: 'foto', title: 'Foto', type: 'image', options: {hotspot: true}},
          ],
          preview: {
            select: {title: 'nombre', subtitle: 'dorsal', media: 'foto'},
          },
        },
      ],
    },
  ],
}
