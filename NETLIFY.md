# Publicar AutomatizeNow en Netlify

Este proyecto está preparado para desplegarse desde GitHub o Netlify sin depender de `manus-storage` ni de ningún servicio interno del entorno de desarrollo.

## Configuración de Netlify

| Campo | Valor |
|---|---|
| Base directory | `/` o vacío |
| Package directory | vacío |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Functions directory | vacío si no se usan Functions |
| Node version | `22` |

El archivo `netlify.toml` está en la raíz del proyecto y ya incluye esta configuración junto con el redirect SPA. El ZIP entregado también coloca `package.json`, `pnpm-lock.yaml` y `netlify.toml` directamente en su raíz; no hay que añadir un subdirectorio como Base directory.

## Imágenes

Las imágenes optimizadas están en `client/public/assets/` en formato WebP y se referencian desde `/assets/...`. Vite las copia automáticamente a `dist/public/assets/` durante el build. No existe ninguna referencia a `/manus-storage/`.

## Formulario

El formulario utiliza el endpoint externo de FormSubmit configurado en el frontend. La primera activación de FormSubmit puede requerir confirmar `automatizenow.team@gmail.com` desde el mensaje que envía el servicio.

## Comprobación local

```bash
pnpm install
pnpm check
pnpm build
```

El resultado que debe publicar Netlify es `dist/public`.
