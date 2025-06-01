# 🧮 Calculatrice Web

Une calculatrice simple et responsive développée en **JavaScript**, **HTML** et **CSS pur**. Ce projet permet de s'exercer à manipuler le DOM, gérer les événements et styliser une interface utilisateur sans frameworks.


## 🔗 Démo en ligne

👉 Voir la calculatrice en ligne : https://rukendogan.github.io/CalculatriceJavaScript/


## ✨ Fonctionnalités

- Opérations de base : addition, soustraction, multiplication, division
- Détection des erreurs (division par zéro)
- Design responsive et propre
- Intégration d'une **police de type calculatrice LCD** (effet digital)
- Interface 100% en **CSS pur**


## 🖋️ Police d'affichage

Le projet utilise la police **"Digital-7"**, populaire pour simuler l'effet "écran LCD" d'une calculatrice.

Importation de la police dans le CSS :

```CSS
@font-face {
  font-family: 'Digital';
  src: url('fonts/digital-7.ttf') format('truetype');
}

.display {
  font-family: 'Digital', monospace;
}
```

📌 La police peut être téléchargée ici :
https://www.dafont.com/digital-7.font


## 📦 Structure du projet

📦 calculatrice/
├── index.html        # Structure HTML
├── style.css         # Style CSS
├── script.js         # Logique JavaScript
└── digital-7.ttf # (optionnel) Police pour affichage LCD


## 🚀 Déploiement avec GitHub Pages

1. Accédez aux paramètres du dépôt GitHub.
2. Cliquez sur l’onglet **Pages**.
3. Sélectionnez la branche `main` (ou `master`) et le dossier `/root`.
4. Cliquez sur **Save**
5. Le site sera accessible à l'adresse :
https://votre-nom-utilisateur.github.io/nom-du-repo/


## 🛠️ À venir (améliorations possibles)

- Ajout du clavier physique (support des touches)
- Historique des calculs
- Mode sombre


## 📜 Licence

Ce projet est open source.

---

Ruken
