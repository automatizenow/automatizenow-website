# Publicar AutomatizeNow en Netlify

Este proyecto está preparado para desplegarse desde la raíz del repositorio, sin depender de `manus-storage` ni de ningún servicio interno del entorno de desarrollo.

## Configuración de Netlify

| Campo | Valor |
|---|---|
| Base directory | `/` o vacío |
| Package directory | vacío |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Functions directory | vacío si no se usan Functions |
| Node version | `22` |

El archivo `netlify.toml` ya incluye esta configuración y un redirect SPA para que los enlaces internos funcionen al recargar la página.

## Imágenes

Las imágenes están en `client/public/assets/` y se referencian desde `/assets/...`. Vite las copia automáticamente a `dist/public/assets/` durante el build, por lo que se sirven correctamente en producción desde GitHub/Netlify.

## Formulario

El formulario utiliza el endpoint externo de FormSubmit configurado en el frontend. La primera activación de FormSubmit puede requerir confirmar el correo `automatizenow.team@gmail.com` desde el mensaje de activación que envía el servicio.

## Comprobación local

```bash
pnpm install
pnpm check
pnpm build
```

El resultado que debe publicar Netlify es `dist/public`.
