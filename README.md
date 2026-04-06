# Aiko

Aiko es un bot multipropósito para Discord construido con `discord.js` v14.

Este repositorio es una base en modernización: estamos migrando arquitectura, experiencia de comandos y despliegue para cumplir estándares actuales de Discord y preparar una salida estable en Oracle.

---

## Estado del proyecto

- ✅ Base funcional de comandos slash e interacciones.
- ✅ Despliegue temporal soportado en Replit.
- 🔄 Rebrand completo de Kuma → Aiko.
- 🔄 Endurecimiento de persistencia y operación para producción.

---

## Características actuales

- Comandos slash organizados por categorías.
- Interacciones con menús/selects.
- Idioma por servidor (EN/ES).
- Comandos utilitarios y de entretenimiento.

---

## Requisitos

- Node.js 20+
- npm 10+
- Token de bot de Discord
- MongoDB (opcional en entornos temporales; recomendado para persistencia)

---

## Variables de entorno

Crea un archivo `.env` con:

```env
TOKEN=tu_token_de_discord
PREFIX=.
EMBEDCOLOR=#5865F2
MONGOURL=mongodb://localhost:27017/aiko
```

> `MONGOURL` es obligatorio para persistencia de configuración por guild en producción.

---

## Instalación local

```bash
git clone <tu-repo>
cd kafka
npm install
npm run start
```

---

## Despliegue temporal en Replit

1. Importa este repositorio en Replit.
2. Configura los Secrets:
   - `TOKEN`
   - `PREFIX`
   - `EMBEDCOLOR`
   - `MONGOURL`
3. Ejecuta el proyecto (el run command está en `.replit`).
4. Usa este despliegue solo como entorno temporal.

---

## Migración prevista a Oracle

Checklist recomendado para mover Aiko a Oracle:

1. Provisionar runtime Node.js.
2. Definir secretos del entorno (`TOKEN`, `MONGOURL`, etc.).
3. Configurar base de datos (Mongo Atlas o Mongo administrado).
4. Activar logs y monitoreo básico.
5. Validar comandos slash, interacciones y persistencia.

---

## Scripts

```bash
npm run start   # producción / ejecución normal
npm run dev     # desarrollo rápido (actualmente mismo entrypoint)
npm test        # placeholder (pendiente suite real)
```

---

## Roadmap inmediato

- [ ] Completar rebrand visual y textual de Aiko.
- [ ] Actualizar componentes legacy de interacciones.
- [ ] Endurecer capa de persistencia para producción.
- [ ] Añadir pruebas automatizadas mínimas.
- [ ] Preparar paquete final de despliegue en Oracle.

---

## Créditos

Proyecto original basado en Kuma, evolucionado para una nueva identidad y operación moderna.
