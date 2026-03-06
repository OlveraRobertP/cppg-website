# CPPG – Sitio web del Despacho

Sitio web corporativo del despacho CPPG. Incluye secciones de presentación, áreas de práctica, equipo, blog y contacto, con soporte para español e inglés.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS** + **shadcn/ui** (Radix UI)
- **React Router DOM** v7
- **TanStack Query** v5
- **React Hook Form** + **Zod**
- **Framer Motion**, **Recharts**, **Sonner**
- **Lucide React** (iconos)

## Requisitos

- Node.js 18+
- npm, pnpm o yarn

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Arrancar en modo desarrollo
npm run dev
```

La app se abre en `http://localhost:5173`.

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecutar ESLint          |

## Build de producción

```bash
npm run build
```

La salida queda en la carpeta `dist/`, lista para servir como estático.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com), **Add New** → **Project** e importa el repo.
3. Vercel detecta Vite y usa por defecto:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Opcional: si usas variables de entorno, configúralas en **Settings → Environment Variables**.
5. **Deploy**. Los siguientes despliegues se harán con cada push a la rama principal.

### Dominio

Tras el primer deploy, Vercel asigna una URL tipo `tu-proyecto.vercel.app`. Puedes añadir un dominio propio en **Settings → Domains**.

## Estructura del proyecto

```
sitio_propuesta/
├── public/          # Assets estáticos (imágenes, favicon, fuentes)
├── src/
│   ├── components/  # Componentes reutilizables y secciones
│   ├── pages/       # Vistas por ruta
│   ├── lib/         # Utilidades y configuración
│   ├── data/        # Datos estáticos (áreas, blog, etc.)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Licencia

Proyecto privado. Uso interno del despacho.
