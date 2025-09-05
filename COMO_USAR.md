# 🚀 Como Usar Seu Portfólio - Guia Rápido

## ▶️ Iniciar o Site

### Opção 1: Windows (Mais Fácil)
1. **Duplo clique** no arquivo `start.bat`
2. Uma janela do terminal abrirá
3. Aguarde aparecer a mensagem de servidor iniciado
4. Abra seu navegador em: **http://localhost:8000** (ou a porta indicada)

### Opção 2: Linux/Mac
1. Abra o terminal na pasta do projeto
2. Execute: `./start.sh`
3. Abra seu navegador em: **http://localhost:8000**

### Opção 3: Manual
1. Abra terminal na pasta
2. Execute: `python -m http.server 8000`
3. Acesse: **http://localhost:8000**

## 🛑 Parar o Servidor

- Pressione **Ctrl + C** no terminal
- Ou feche a janela do terminal

## 📝 Primeira Personalização (5 minutos)

### 1. Suas Informações Básicas
Abra `index.html` e procure por:

**Seu Nome (linha ~47):**
```html
Olá, eu sou <span class="accent">Eduardo</span>
```
Mude "Eduardo" para seu nome.

**Sua Idade (linha ~49):**
```html
Software Developer • 16 anos • 5 anos de experiência
```
Ajuste idade e anos de experiência.

### 2. Seu Email (linha ~490)
```html
<p>eduardo.dev@email.com</p>
```
Coloque seu email real.

### 3. Suas Redes Sociais (linha ~535)
```html
<a href="#" class="social-link"><i class="fab fa-github"></i></a>
```
Substitua `#` pelos links dos seus perfis.

## 🎯 Personalizações Importantes

### ✅ Obrigatórias (faça primeiro):
1. **Nome e informações pessoais**
2. **Email de contato**
3. **Links das redes sociais**
4. **Sua foto profissional**

### 🔧 Recomendadas:
1. **Projetos reais** (substitua os exemplos)
2. **Skills específicas** (suas tecnologias)
3. **Biografia personalizada**

### 🎨 Opcionais:
1. **Cores do tema**
2. **Animações e efeitos**
3. **Seções adicionais**

## 📁 Estrutura dos Arquivos

```
eduardo_dev_portfolio/
├── index.html          ← Conteúdo principal (edite aqui)
├── styles.css          ← Aparência e cores
├── script.js           ← Interações e animações
├── start.bat           ← Iniciar (Windows)
├── start.sh            ← Iniciar (Linux/Mac)
├── README.md           ← Documentação completa
├── PERSONALIZACAO.md   ← Guia de personalização
└── COMO_USAR.md        ← Este arquivo
```

## 🔧 Edição Rápida

### Editores Recomendados:
- **VS Code** (profissional)
- **Notepad++** (simples)
- **Sublime Text** (intermediário)

### Dica de Ouro:
Use **Ctrl+F** para encontrar rapidamente o que quer mudar:
- Procure por "Eduardo" para encontrar seu nome
- Procure por "@email.com" para encontrar contatos
- Procure por "16 anos" para encontrar sua idade

## 🌐 Publicar na Internet

### Opção 1: GitHub Pages (Grátis)
1. Crie conta no [GitHub](https://github.com)
2. Crie repositório público
3. Faça upload dos arquivos
4. Ative GitHub Pages nas configurações
5. Seu site estará online!

### Opção 2: Netlify (Super Fácil)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta inteira para o site
3. Pronto! Site publicado automaticamente

## ❓ Problemas Frequentes

**❌ "Site não carrega"**
✅ Verifique se o servidor está rodando
✅ Confirme a URL: http://localhost:8000

**❌ "Mudanças não aparecem"**
✅ Atualize a página (Ctrl+F5)
✅ Reinicie o servidor

**❌ "Imagens não aparecem"**
✅ Verifique o caminho do arquivo
✅ Use caminhos relativos (./images/foto.jpg)

**❌ "Python não encontrado"**
✅ Instale Python do site oficial
✅ Reinicie o terminal após instalação

## 📞 Ajuda Extra

Se precisar de ajuda:
1. Leia o `README.md` (documentação completa)
2. Consulte `PERSONALIZACAO.md` (guia detalhado)
3. Use comunidades online (Stack Overflow, Reddit)

## 🎉 Sucesso!

Quando seu site estiver pronto:
- ✅ Funciona no navegador
- ✅ Tem suas informações
- ✅ Links funcionam
- ✅ Está bonito e profissional

**Parabéns! Você tem um portfólio profissional!** 🌟

---

**⚡ Lembre-se: Este é SEU portfólio. Personalize, experimente e deixe sua marca!**