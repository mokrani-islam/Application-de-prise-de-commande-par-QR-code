# Étape 1 : Utiliser une image de node comme base
FROM node:20.9.0-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application React

RUN npm run build

# Étape 2 : Utiliser une image légère d'un serveur HTTP pour servir l'application
FROM nginx:alpine

# Copier le build de l'application React depuis l'étape de construction précédente
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour le serveur HTTP nginx
EXPOSE 80

# Commande de démarrage pour lancer le serveur nginx
CMD ["nginx", "-g", "daemon off;"]
