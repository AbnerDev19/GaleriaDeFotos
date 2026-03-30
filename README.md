# OBSCURA — Plataforma de Galeria para Fotógrafos

Site de galeria fotográfica com login de fotógrafos, upload via Google Drive e armazenamento de metadados no Firebase.

---

## Stack

- **Frontend**: HTML + CSS + JS puro (sem framework)
- **Autenticação + Banco**: Firebase (Auth + Firestore)
- **Imagens**: Google Drive (via links públicos)
- **Deploy**: Vercel

---

## Estrutura de Arquivos

```
obscura/
├── index.html              ← Galeria pública
├── vercel.json             ← Config do Vercel
├── firestore.rules         ← Regras de segurança (colar no Console)
├── css/
│   ├── style.css           ← CSS principal
│   ├── login.css           ← CSS da página de login
│   └── dashboard.css       ← CSS do dashboard
├── js/
│   └── config.js           ← ⚠️ Configuração do Firebase (editar!)
└── pages/
    ├── login.html          ← Login / Cadastro de fotógrafos
    └── dashboard.html      ← Área do fotógrafo
```

---

## Passo a Passo de Configuração

### 1. Firebase

1. Acesse https://console.firebase.google.com
2. Crie um novo projeto
3. **Authentication**: Ative o método "Email/Senha"
4. **Firestore**: Crie um banco (modo produção)
5. Cole as regras do arquivo `firestore.rules` em **Firestore > Regras**
6. Vá em **Configurações do projeto > Seus apps > Web**
7. Copie o objeto `firebaseConfig` e cole em `js/config.js`

### 2. Google Drive

As fotos ficam no Google Drive dos próprios fotógrafos:

1. Fotógrafo faz upload da foto no Drive
2. Clica com botão direito → **Compartilhar**
3. Muda para **"Qualquer pessoa com o link pode ver"**
4. Copia o link e cola no dashboard do site

O site converte automaticamente o link do Drive para URL de imagem direta usando a API de thumbnail do Google.

### 3. Deploy no Vercel

```bash
# Instale o CLI do Vercel (se ainda não tiver)
npm i -g vercel

# Na pasta do projeto
vercel

# Siga as instruções:
# - Link to existing project? No
# - Project name: obscura (ou outro nome)
# - In which directory is your code? ./
# - Override settings? No
```

Ou faça deploy pelo GitHub:
1. Suba o projeto para um repositório GitHub
2. Acesse https://vercel.com/new
3. Importe o repositório
4. Clique em Deploy

---

## Como Funciona

| Página | Acesso | Descrição |
|--------|--------|-----------|
| `/index.html` | Público | Galeria com todas as fotos publicadas |
| `/pages/login.html` | Público | Login/cadastro de fotógrafos |
| `/pages/dashboard.html` | Autenticado | Upload e gerenciamento das fotos |

### Fluxo de Upload
1. Fotógrafo faz login
2. No Dashboard, cola o link do Google Drive da foto
3. Preenche título e categoria
4. Clica em "Publicar" → metadados salvos no Firestore
5. A foto aparece instantaneamente na galeria pública

### Estrutura do Firestore
```
photos/
  {id}/
    title: string
    category: "retrato" | "urbano" | "natureza" | "evento"
    driveUrl: string       ← URL de thumbnail do Drive
    driveOriginal: string  ← Link original compartilhado
    authorName: string
    authorId: string       ← UID do Firebase Auth
    createdAt: timestamp
```

---

## Paleta de Cores

| Variável | Valor | Uso |
|----------|-------|-----|
| `--black` | `#0e0e0e` | Fundo principal |
| `--red` | `#a03030` | Destaque / ações |
| `--white` | `#f0ece4` | Texto principal |

---

## Segurança

- Regras do Firestore garantem que apenas autores podem excluir suas fotos
- Galeria pública pode apenas ler
- Autenticação gerenciada pelo Firebase Auth
- Senhas nunca armazenadas no código
