# SUHOX_ — site officiel

Site de la chaîne gaming **SUHOX_** : vidéos, jeux, platinums, réseaux et livre d'or.

🔗 https://suhox4.github.io/SUHOX/

## Pages

| Page | Rôle |
|---|---|
| `index.html` | Accueil |
| `subscribe.html` | S'abonner à la chaîne |
| `video.html` | Vidéos, shorts et posts (table `videos`) |
| `a propos.html` | Présentation |
| `socials.html` | Réseaux sociaux (table `socials`) |
| `stats.html` | Statistiques de la chaîne (table `stats`) |
| `mes jeux.html` / `autres-jeux.html` | Jeux |
| `platinums.html` | Progression des platines (table `platinums`) |
| `livre d'or.html` | Messages de la communauté (table `livre_or`) |
| `ADMIN.html` | Administration (connexion requise) |
| `404.html` | Page d'erreur |

`mobile-menu.js` / `mobile-menu.css` gèrent le menu sur téléphone.

## Fonctionnement

Site statique (HTML, CSS, JavaScript) hébergé avec **GitHub Pages**. Les contenus qui changent
(stats, vidéos, platinums, réseaux, livre d'or, statistiques de visites) sont stockés dans **Supabase**.

La clé Supabase présente dans les pages est une clé **publique** : la sécurité repose sur les règles
d'accès (RLS) configurées dans Supabase, pas sur le code des pages.

## Mettre le site à jour

Modifier les fichiers sur la branche `main` : GitHub Pages republie le site en quelques minutes.
Les statistiques, vidéos et platinums se modifient depuis `ADMIN.html`, sans toucher au code.

## Images

- `favicon.png` : icône d'onglet
- `logo.png` : avatar affiché dans les pages
- `apercu.jpg` : image d'aperçu quand le lien est partagé (Discord, X, WhatsApp…)
- `8caad655-….png` : image d'origine en haute résolution
