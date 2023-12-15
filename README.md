# Vet calc

Prototype app that calculates animal drug dosages in a veterinary setting.

**Experimental: DO NOT USE under any circumstances!**

## Tech stack

1. create-t3-app
2. NextJS
3. React
4. DaisyUI
5. Tailwind
6. cookies-next (cookie management)
7. pnpm
8. node lts
9. TypeScript

## Architecture

Site exploits NextJS's [Static Site Generation](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths) to generate pages procedurally from a [Single Source of Truth](./src/business/SSOT.ts).

