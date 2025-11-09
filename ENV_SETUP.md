# Configuration des Variables d'Environnement

Ce projet utilise des secrets GitHub pour stocker les variables d'environnement sensibles. Le fichier `.env` est ignoré par Git (voir `.gitignore`).

## Variables d'Environnement Requises

### Configuration Email (SMTP)

- `EMAIL_HOST` - Serveur SMTP (ex: `plesk1.tn.oxa.host`)
- `EMAIL_PORT` - Port SMTP (ex: `587`)
- `EMAIL_SECURE` - Connexion sécurisée (ex: `false`)
- `EMAIL_USER` - Nom d'utilisateur SMTP (ex: `contact@waaw.tn`)
- `EMAIL_PASSWORD` - Mot de passe SMTP
- `EMAIL_FROM_NAME` - Nom de l'expéditeur (ex: `VTC Marseille Premium`)
- `ADMIN_EMAIL` - Email de l'administrateur pour recevoir les demandes de contact

## Configuration Locale (.env.local)

Pour le développement local, créez un fichier `.env.local` à la racine du projet :

```env
EMAIL_HOST=plesk1.tn.oxa.host
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=contact@waaw.tn
EMAIL_PASSWORD=votre_mot_de_passe
EMAIL_FROM_NAME=VTC Marseille Premium
ADMIN_EMAIL=votre-email@example.com
```

## Configuration GitHub Secrets

Pour le déploiement sur GitHub Pages, ajoutez ces secrets dans les paramètres du repository :

1. Allez sur **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Ajoutez chaque variable d'environnement :
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_FROM_NAME`
   - `ADMIN_EMAIL`

## Important

⚠️ **Ne jamais commiter le fichier `.env` ou `.env.local` dans Git !**

Ces fichiers sont déjà dans `.gitignore` et seront automatiquement ignorés.
