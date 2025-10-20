# 🔄 Workflow CMS - Comment les Modifications Apparaissent sur le Site

## 📋 Processus Complet

### 1. Vous Modifiez du Contenu dans le CMS (`/admin`)

Exemple : Vous changez le titre de la page d'accueil

```
Ancien titre: "Votre Expert en Électricité..."
Nouveau titre: "ADELEC83 - Votre Partenaire Énergie"
```

### 2. Vous Cliquez sur "Publish"

Le CMS fait automatiquement :
- ✅ Enregistre les modifications dans le fichier JSON (`content/pages/home.json`)
- ✅ Crée un commit Git avec vos modifications
- ✅ Pousse le commit sur GitHub

### 3. Netlify Détecte le Changement

- ✅ Netlify surveille votre dépôt GitHub
- ✅ Dès qu'un nouveau commit arrive, Netlify lance un build automatique

### 4. Le Site est Rebuild

```bash
npm run build
```

- ✅ Vite compile le site React
- ✅ Les composants chargent les nouveaux contenus JSON
- ✅ Un nouveau dossier `dist/` est généré

### 5. Le Site est Redéployé

- ✅ Netlify déploie la nouvelle version
- ✅ Le site est mis à jour (1-2 minutes)
- ✅ Vos modifications sont visibles !

---

## ⏱️ Temps de Mise à Jour

| Étape | Durée |
|-------|-------|
| Modification dans le CMS | Instantané |
| Commit Git | 1-2 secondes |
| Détection par Netlify | 5-10 secondes |
| Build du site | 30-60 secondes |
| Déploiement | 10-20 secondes |
| **TOTAL** | **~2 minutes** |

---

## 🎯 Contenu Actuellement Dynamique

### ✅ Page d'Accueil (Hero Section)

Fichier CMS : `content/pages/home.json`

```json
{
  "hero": {
    "title": "Votre titre personnalisé",
    "subtitle": "Votre sous-titre",
    "buttonText": "Texte du bouton"
  },
  "stats": [
    { "value": "2005", "label": "Année de création" },
    { "value": "10+", "label": "Collaborateurs" }
  ]
}
```

**Composant** : `src/components/Hero.tsx`
- Charge automatiquement `home.json`
- Affiche le contenu du CMS
- Fallback sur les valeurs par défaut si le fichier n'existe pas

### ✅ Paramètres Généraux

Fichier CMS : `content/settings/general.json`

```json
{
  "phone": "+33 4 94 91 27 53",
  "email": "contact@adelec83.com",
  "address": { ... },
  "social": { ... }
}
```

**Utilisé dans** :
- Header (téléphone)
- Footer (toutes les infos)
- Page Contact

---

## 📝 Comment Modifier du Contenu

### Exemple : Changer le Titre de la Page d'Accueil

1. **Aller sur** : https://adelec83-website.netlify.app/admin
2. **Se connecter** avec vos identifiants
3. **Cliquer sur** "Pages" > "Page d'accueil"
4. **Modifier** le champ "Titre principal" dans "Hero Section"
5. **Cliquer sur** "Publish" > "Publish now"
6. **Attendre 2 minutes**
7. **Rafraîchir** votre site : https://adelec83-website.netlify.app
8. ✅ **Le nouveau titre apparaît !**

---

## 🔍 Vérifier l'État du Déploiement

### Option 1 : Dashboard Netlify

1. Aller sur : https://app.netlify.com/sites/adelec83-website/deploys
2. Vous verrez :
   - 🟡 **Building** : En cours de construction
   - 🟢 **Published** : Déployé avec succès
   - 🔴 **Failed** : Erreur (rare)

### Option 2 : Badge de Statut

Vous pouvez voir le statut directement sur GitHub :
https://github.com/maxence-hue/adelec83-website

---

## 🚨 Que Faire si les Modifications n'Apparaissent Pas ?

### 1. Vérifier que le Déploiement est Terminé

- Aller sur le dashboard Netlify
- Attendre que le statut soit "Published"

### 2. Vider le Cache du Navigateur

```
Chrome/Edge : Ctrl + Shift + R (Windows) ou Cmd + Shift + R (Mac)
Firefox : Ctrl + F5 (Windows) ou Cmd + Shift + R (Mac)
Safari : Cmd + Option + R
```

### 3. Vérifier les Logs de Build

Si le build échoue :
1. Aller sur https://app.netlify.com/sites/adelec83-website/deploys
2. Cliquer sur le dernier déploiement
3. Lire les logs d'erreur
4. Me contacter si besoin

### 4. Vérifier que Git Gateway est Activé

- Aller sur : https://app.netlify.com/sites/adelec83-website/settings/identity
- Vérifier que "Git Gateway" est "Enabled"

---

## 📊 Contenu à Venir (Prochaines Étapes)

### 🔜 Blog Dynamique

- Liste des articles
- Page article individuelle
- Catégories et tags

### 🔜 Témoignages Dynamiques

- Affichage automatique sur la page d'accueil
- Carrousel de témoignages

### 🔜 Réalisations/Portfolio

- Galerie de projets
- Filtres par catégorie

---

## 💡 Conseils

### ✅ Bonnes Pratiques

1. **Testez en brouillon** : Créez du contenu avec "Publié = false" pour tester
2. **Attendez le déploiement** : Ne faites pas 10 modifications d'affilée
3. **Optimisez les images** : Compressez avant d'uploader (max 2MB)
4. **Vérifiez sur mobile** : Testez toujours sur téléphone après modification

### ⚠️ À Éviter

1. ❌ Ne supprimez pas les fichiers JSON manuellement
2. ❌ Ne modifiez pas directement dans GitHub (utilisez le CMS)
3. ❌ N'uploadez pas d'images trop lourdes (>2MB)

---

## 🆘 Support

Pour toute question :
- **Email** : maxence@adsolar.fr
- **GitHub Issues** : https://github.com/maxence-hue/adelec83-website/issues

---

**Résumé** : Modifiez dans le CMS → Publiez → Attendez 2 min → Rafraîchissez le site ! 🚀
