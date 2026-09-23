# Portfolio — Martin Buriez

Site personnel présentant mon parcours, mes projets et mon CV.

🔗 [www.buriez.be](https://www.buriez.be)

**Stack** : Next.js (App Router) · TypeScript · Tailwind CSS

**Hébergement** : OVH · déploiement via Coolify

## Démarrer

```bash
yarn install
yarn dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

```
app/                  Pages : accueil (/), CV (/cv), projets (/projects)
components/           Composants réutilisables (header, footer, cartes, carrousel...)
lib/                  Données du site (profil, expériences, compétences, projets)
public/projects/      Captures d'écran des projets
```

## Scripts

| Commande        | Description                          |
| --------------- | ------------------------------------- |
| `yarn dev`       | Serveur de développement              |
| `yarn build`     | Build de production                   |
| `yarn start`     | Lance le build de production          |
| `yarn lint`      | Vérifie le code avec ESLint           |
