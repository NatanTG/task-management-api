# Use a imagem oficial do Node.js como base
FROM node:22.11.0-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Copie a pasta prisma para dentro do container
COPY prisma ./prisma

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]
