# 📚 Guide d'Utilisation du CMS ADELEC83

## 🎯 Accès à l'Interface Admin

### URL d'accès
```
https://adelec83-website.netlify.app/admin
```

## 🔐 Configuration de l'Authentification

### Étape 1 : Activer Netlify Identity

1. Aller sur le **Dashboard Netlify** : https://app.netlify.com/projects/adelec83-website
2. Cliquer sur **"Site configuration"** > **"Identity"**
3. Cliquer sur **"Enable Identity"**

### Étape 2 : Configurer Git Gateway

1. Dans Identity, aller dans **"Settings and usage"**
2. Scroll jusqu'à **"Git Gateway"**
3. Cliquer sur **"Enable Git Gateway"**

### Étape 3 : Inviter des utilisateurs

1. Dans Identity, cliquer sur **"Invite users"**
2. Entrer votre email (maxence@adsolar.fr)
3. Vous recevrez un email d'invitation
4. Cliquer sur le lien et créer votre mot de passe

## 📝 Utilisation du CMS

### Créer un Article de Blog

1. Se connecter sur `/admin`
2. Cliquer sur **"Blog"** dans le menu
3. Cliquer sur **"New Blog"**
4. Remplir les champs :
   - **Titre** : Le titre de votre article
   - **Date** : Date de publication
   - **Auteur** : ADELEC83 (par défaut)
   - **Image** : Uploader une image de couverture
   - **Description** : Résumé court (pour SEO)
   - **Catégorie** : Choisir parmi les options
   - **Tags** : Ajouter des mots-clés
   - **Contenu** : Écrire l'article en Markdown
   - **Publié** : Cocher pour publier
5. Cliquer sur **"Publish"** > **"Publish now"**

### Ajouter un Témoignage

1. Aller dans **"Témoignages"**
2. Cliquer sur **"New Testimonials"**
3. Remplir :
   - Nom du client
   - Ville
   - Note (1-5 étoiles)
   - Témoignage
   - Photo (optionnel)
   - Service concerné
   - Date
4. Cocher **"Affiché sur le site"**
5. Publier

### Ajouter une Réalisation

1. Aller dans **"Réalisations"**
2. Cliquer sur **"New Projects"**
3. Remplir les informations du projet
4. Uploader les images
5. Publier

### Modifier les Textes du Site

1. Aller dans **"Pages"**
2. Choisir la page à modifier (Accueil, À propos)
3. Modifier les textes
4. Sauvegarder

### Modifier les Paramètres

1. Aller dans **"Paramètres"**
2. Modifier :
   - Téléphone
   - Email
   - Adresse
   - Horaires
   - Réseaux sociaux
3. Sauvegarder

## 🖼️ Gestion des Images

### Upload d'Images

1. Dans n'importe quel champ "Image", cliquer sur **"Choose an image"**
2. Glisser-déposer votre image OU cliquer pour parcourir
3. L'image est automatiquement uploadée dans `/public/images/uploads/`

### Bonnes Pratiques

- **Format** : JPG ou PNG
- **Taille** : Maximum 2 MB
- **Dimensions recommandées** :
  - Articles de blog : 1200x630 px
  - Photos d'équipe : 400x400 px
  - Réalisations : 1920x1080 px

### Optimisation

Avant d'uploader, optimisez vos images avec :
- [TinyPNG](https://tinypng.com) - Compression gratuite
- [Squoosh](https://squoosh.app) - Outil Google

## ✍️ Écriture en Markdown

Le contenu des articles utilise le format **Markdown**. Voici les bases :

### Titres
```markdown
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3
```

### Texte
```markdown
**Texte en gras**
*Texte en italique*
[Lien](https://adelec83.com)
```

### Listes
```markdown
- Élément 1
- Élément 2
- Élément 3

1. Premier
2. Deuxième
3. Troisième
```

### Images
```markdown
![Description de l'image](/images/uploads/mon-image.jpg)
```

### Citations
```markdown
> Ceci est une citation
```

## 🔄 Workflow de Publication

### Brouillon → Publication

1. Créer un contenu avec **"Publié" = false** (brouillon)
2. Prévisualiser
3. Quand prêt, cocher **"Publié" = true**
4. Publier

### Modification d'un Contenu Publié

1. Ouvrir le contenu
2. Modifier
3. Sauvegarder
4. Le site se met à jour automatiquement

## 🚀 Déploiement Automatique

Chaque fois que vous publiez du contenu via le CMS :
1. Les modifications sont enregistrées dans Git
2. Netlify détecte les changements
3. Le site est automatiquement rebuild
4. Les modifications sont en ligne en 1-2 minutes

## 📱 Utilisation Mobile

Le CMS est **responsive** et fonctionne sur mobile/tablette :
- Accédez à `/admin` depuis votre navigateur mobile
- Connectez-vous
- Gérez votre contenu en déplacement

## 🆘 Problèmes Courants

### "Unable to access identity"
**Solution** : Vérifier que Netlify Identity est activé dans le dashboard

### "Error loading the CMS configuration"
**Solution** : Vérifier que le fichier `config.yml` est correct

### Les images ne s'affichent pas
**Solution** : Vérifier le chemin des images (doit commencer par `/images/uploads/`)

### Le contenu ne se met pas à jour
**Solution** : 
1. Vérifier que "Publié" est coché
2. Attendre 1-2 minutes pour le rebuild
3. Vider le cache du navigateur (Ctrl+F5)

## 📞 Support

Pour toute question sur l'utilisation du CMS :
- **Email** : maxence@adsolar.fr
- **Documentation Netlify CMS** : https://decapcms.org/docs/

## ✅ Checklist Première Utilisation

- [ ] Activer Netlify Identity
- [ ] Activer Git Gateway
- [ ] S'inviter comme utilisateur
- [ ] Se connecter sur `/admin`
- [ ] Créer un premier article de test
- [ ] Ajouter un témoignage
- [ ] Modifier les paramètres généraux
- [ ] Uploader une image
- [ ] Vérifier que le contenu apparaît sur le site

---

**Félicitations !** Vous pouvez maintenant gérer tout le contenu de votre site ADELEC83 sans toucher au code ! 🎉
