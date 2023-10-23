# Utiliser une image de base appropriée (par exemple, Node.js pour une application React)
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port sur lequel le client s'exécute (si nécessaire)
# EXPOSE 3000

# Ajouter la commande pour démarrer l'application et garder le conteneur en cours d'exécution
CMD ["npm", "start", "&", "tail", "-f", "/dev/null"]
