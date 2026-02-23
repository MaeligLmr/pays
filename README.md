# 🌍 Quiz des Pays - Drapeaux

Application interactive de quiz géographique permettant d'identifier les pays du monde à partir de leurs drapeaux.

## 📋 Description

Cette application web propose un quiz interactif où l'utilisateur doit :
- Identifier un pays à partir de son drapeau
- Donner le nom du pays
- Indiquer sa capitale
- Localiser le pays sur une carte interactive du monde

## ✨ Fonctionnalités

- **🎯 Quiz aléatoire** : Sélection aléatoire parmi 197 pays reconnus par l'ONU
- **🗺️ Carte interactive** : Carte Leaflet avec points cliquables pour localiser les pays
- **✅ Validation en temps réel** : Feedback immédiat sous chaque champ avec code couleur
- **📊 Système de score** : Suivi du score et du nombre total de questions
- **🎨 Interface moderne** : Design avec dégradés et animations fluides
- **📱 Responsive** : Interface adaptée aux différentes tailles d'écran

## 🎮 Comment jouer

1. Un drapeau s'affiche aléatoirement
2. Entrez le nom du pays dans le premier champ
3. Entrez sa capitale dans le deuxième champ
4. Cliquez sur le point correspondant au pays sur la carte
5. Validez vos réponses
6. Le feedback s'affiche directement sous chaque champ :
   - ✓ En vert si correct
   - ✗ En rouge si incorrect avec la bonne réponse
7. Le point correct s'affiche en vert sur la carte

## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Styles avec gradients et animations
- **JavaScript (Vanilla)** : Logique du quiz
- **Leaflet.js** : Bibliothèque de cartographie interactive
- **CartoDB Light** : Tuiles de carte
- **Flagcdn.com** : Source des images de drapeaux

## 📂 Structure du projet

```
pays/
├── index.html          # Structure HTML de l'application
├── style.css           # Styles et mise en page
├── script.js           # Logique JavaScript et données des pays
└── README.md           # Documentation
```

## 🚀 Installation et utilisation

1. Clonez ou téléchargez le projet
2. Ouvrez le fichier `index.html` dans un navigateur web moderne
3. Aucune installation ou configuration supplémentaire n'est nécessaire

## 🎯 Règles de validation

- **Nom du pays** : Doit correspondre exactement (insensible à la casse)
- **Capitale** : Doit correspondre exactement (insensible à la casse)
- **Localisation** : Tolérance de 500 km autour du centre du pays
- Le score augmente uniquement si les 3 critères sont corrects

## 🌐 Base de données

L'application contient 197 pays avec :
- Nom du pays en français
- Capitale
- Coordonnées géographiques (latitude/longitude)

## 📝 Fonctionnalités clés du code

- **Formule de Haversine** : Calcul précis de la distance entre deux points sur la Terre
- **Gestion d'état** : Suivi de la sélection utilisateur et du pays actuel
- **Réinitialisation automatique** : Nettoyage des champs et de la carte à chaque nouveau drapeau
- **Feedback visuel** : Points interactifs avec changement de couleur au survol et à la sélection

## 🎨 Palette de couleurs

- **Gradient principal** : #667eea → #764ba2 (violet dégradé)
- **Correct** : #28a745 (vert)
- **Incorrect** : #dc3545 (rouge)
- **Points de carte** : #e0e0e0 (gris) → #667eea (sélectionné)

## 📄 Licence

Projet éducatif libre d'utilisation.

## 👤 Auteur

Développé comme outil d'apprentissage de la géographie mondiale.