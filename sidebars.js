/** @type {import('@docusaurus/types').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Introducción',
    },
    {
      type: 'category',
      label: '📄 Kit bienvenida',
      items: ['Kit-bienvenida/kit-bienvenida'],
    },
    {
      type: 'category',
      label: '👤 Creación de Perfil',
      items: ['perfil/creacion-perfil'],
    },
    {
      type: 'category',
      label: '💼 Oportunidades',
      items: ['oportunidades/creacion-oportunidades'],
    },
    {
      type: 'category',
      label: '📋 Registro',
      items: ['registro/registro-plataforma'],
    },
    {
      type: 'category',
      label: '🎯 Herramienta Vocacional',
      items: ['vocacional/herramienta-vocacional'],
    },
    {
      type: 'category',
      label: '📊 Plataform',
      items: [
        'Platform/creacion-roles',
        'Platform/descargar-tableros'
      ],
    },
    {
      type: 'category',
      label: '🔗 Integración CRM',
      items: ['crm/integracion-crm'],
    },
  ],
};

export default sidebars;