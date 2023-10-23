# Utiliser une image de base appropriée (par exemple, Node.js pour un serveur Node.js)
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/server

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port sur lequel le serveur s'exécute
EXPOSE 8080

# Commande pour démarrer le serveur
CMD ["node", "index.js"]
