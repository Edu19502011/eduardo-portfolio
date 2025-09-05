# 🎨 Guia de Personalização - Portfólio Eduardo

Este guia te ajudará a personalizar completamente seu portfólio para refletir sua identidade única como desenvolvedor.

## 📋 Lista de Verificação Rápida

- [ ] **Informações Pessoais**: Nome, idade, experiência
- [ ] **Foto Profissional**: Substitua o placeholder
- [ ] **Biografia**: Conte sua história
- [ ] **Skills**: Ajuste tecnologias e níveis
- [ ] **Projetos**: Adicione seus projetos reais
- [ ] **Contato**: Email, telefone, localização
- [ ] **Redes Sociais**: Links para seus perfis
- [ ] **Cores**: Personalize o tema (opcional)

## 🔧 Personalização Detalhada

### 1. 👤 Informações Pessoais

**Arquivo**: `index.html`

**Seção Hero (linha ~45-60):**
```html
<h1 class="hero-title">
    Olá, eu sou <span class="accent">SEU_NOME</span>
    <span class="typing-cursor">|</span>
</h1>
<p class="hero-subtitle">Software Developer • SUA_IDADE anos • ANOS_EXP anos de experiência</p>
<p class="hero-description">
    SUA_DESCRIÇÃO_AQUI
</p>
```

**Bloco de Código (linha ~70-95):**
```html
<span class="property">age</span>: <span class="number">SUA_IDADE</span>;
<span class="property">experience</span>: <span class="string">"ANOS anos"</span>;
<span class="property">role</span>: <span class="string">"SEU_CARGO"</span>;
```

### 2. 📸 Foto Profissional

**Substitua o placeholder (linha ~170):**
```html
<div class="about-image">
    <img src="caminho/para/sua/foto.jpg" alt="Eduardo" style="width: 300px; height: 300px; border-radius: 20px; object-fit: cover;">
</div>
```

**Dica**: Use uma foto profissional de alta qualidade (mín. 400x400px)

### 3. ✍️ Biografia

**Arquivo**: `index.html` (linha ~150-165)

```html
<div class="about-text">
    <h3>Desenvolvedor apaixonado por tecnologia</h3>
    <p>
        SUA_BIOGRAFIA_PRINCIPAL_AQUI
    </p>
    <p>
        PARÁGRAFO_ADICIONAL_SOBRE_VOCÊ
    </p>
</div>
```

### 4. 🛠️ Skills e Tecnologias

**Arquivo**: `index.html` (linha ~200-300)

**Frontend:**
```html
<div class="skill-item">
    <div class="skill-info">
        <span>TECNOLOGIA</span>
        <span>PORCENTAGEM%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="PORCENTAGEM%"></div>
    </div>
</div>
```

**Adicionar nova skill:**
1. Copie um bloco `skill-item` existente
2. Altere o nome da tecnologia
3. Ajuste a porcentagem
4. Mova para a categoria correta (Frontend/Backend/Ferramentas)

### 5. 💼 Projetos

**Arquivo**: `index.html` (linha ~350-450)

**Para cada projeto:**
```html
<div class="project-card">
    <div class="project-image">
        <img src="URL_DA_IMAGEM" alt="NOME_DO_PROJETO">
        <div class="project-overlay">
            <div class="project-actions">
                <a href="URL_DEMO" class="btn-icon"><i class="fas fa-external-link-alt"></i></a>
                <a href="URL_GITHUB" class="btn-icon"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>NOME_DO_PROJETO</h3>
        <p>DESCRIÇÃO_DO_PROJETO</p>
        <div class="project-tags">
            <span class="tag">TECH1</span>
            <span class="tag">TECH2</span>
            <span class="tag">TECH3</span>
        </div>
    </div>
</div>
```

**Dicas para imagens de projeto:**
- Use screenshots reais dos seus projetos
- Tamanho recomendado: 400x300px
- Alternativa: Unsplash.com para imagens placeholder

### 6. 📧 Informações de Contato

**Arquivo**: `index.html` (linha ~500-520)

```html
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>SEU_EMAIL@exemplo.com</p>
    </div>
</div>
<div class="contact-method">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Telefone</h4>
        <p>+55 (XX) XXXXX-XXXX</p>
    </div>
</div>
<div class="contact-method">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h4>Localização</h4>
        <p>SUA_CIDADE, País</p>
    </div>
</div>
```

### 7. 🔗 Redes Sociais

**Arquivo**: `index.html` (linha ~530-540)

```html
<div class="social-links">
    <a href="SEU_GITHUB" class="social-link"><i class="fab fa-github"></i></a>
    <a href="SEU_LINKEDIN" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="SEU_TWITTER" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="SEU_INSTAGRAM" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 8. 🎨 Personalização de Cores

**Arquivo**: `styles.css` (linha ~30-40)

```css
:root {
    --primary-color: #00d4ff;      /* Sua cor principal */
    --secondary-color: #ff6b6b;    /* Cor secundária */
    --accent-color: #ffd93d;       /* Cor de destaque */
    --bg-primary: #0a0a0a;         /* Fundo principal */
    --bg-secondary: #1a1a1a;       /* Fundo secundário */
    --bg-card: #2a2a2a;            /* Fundo dos cards */
}
```

**Sugestões de paletas:**

**Azul Profissional:**
```css
--primary-color: #2563eb;
--secondary-color: #7c3aed;
--accent-color: #06b6d4;
```

**Verde Tech:**
```css
--primary-color: #10b981;
--secondary-color: #f59e0b;
--accent-color: #ef4444;
```

**Roxo Criativo:**
```css
--primary-color: #8b5cf6;
--secondary-color: #ec4899;
--accent-color: #f97316;
```

## 🖼️ Gerenciamento de Imagens

### Estrutura Recomendada:
```
eduardo_dev_portfolio/
├── images/
│   ├── profile.jpg          (sua foto)
│   ├── projects/
│   │   ├── projeto1.png
│   │   ├── projeto2.png
│   │   └── ...
│   └── icons/
│       └── favicon.ico
```

### Como adicionar suas imagens:
1. Crie a pasta `images` no diretório raiz
2. Coloque sua foto como `images/profile.jpg`
3. Crie subpasta `projects` para screenshots dos projetos
4. Atualize os caminhos no HTML:
   ```html
   <img src="images/profile.jpg" alt="Eduardo">
   <img src="images/projects/meu-projeto.png" alt="Meu Projeto">
   ```

## 📱 Favicon (Ícone do Site)

1. Crie um favicon usando [favicon.io](https://favicon.io/)
2. Coloque o arquivo `favicon.ico` na pasta raiz
3. Adicione no `<head>` do HTML:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

## 🚀 Deploy e Hospedagem

### GitHub Pages (Grátis):
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch principal
5. Seu site estará em: `username.github.io/repositorio`

### Netlify (Grátis):
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o site
3. Seu site será publicado automaticamente

### Domínio Personalizado:
- Registre um domínio (ex: `eduardodev.com`)
- Configure no GitHub Pages ou Netlify
- Adicione certificado SSL (automático)

## 🔍 SEO e Meta Tags

Adicione no `<head>` do HTML:

```html
<meta name="description" content="Eduardo - Software Developer com 5 anos de experiência. Portfólio com projetos em React, Python, Node.js e mais.">
<meta name="keywords" content="Eduardo, Software Developer, Programador, React, Python, Node.js, JavaScript">
<meta name="author" content="Eduardo">

<!-- Open Graph (redes sociais) -->
<meta property="og:title" content="Eduardo - Software Developer">
<meta property="og:description" content="Portfólio profissional de Eduardo - 5 anos de experiência em desenvolvimento">
<meta property="og:image" content="images/profile.jpg">
<meta property="og:type" content="website">
```

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Todas as informações pessoais estão corretas
- [ ] Links das redes sociais funcionam
- [ ] Projetos têm links para demo e código
- [ ] Email de contato está correto
- [ ] Imagens carregam corretamente
- [ ] Site funciona no mobile
- [ ] Não há erros no console do navegador
- [ ] Formulário de contato funciona
- [ ] Cores estão harmoniosas
- [ ] Textos não têm erros ortográficos

## 🆘 Problemas Comuns

**Imagens não carregam:**
- Verifique o caminho do arquivo
- Confirme que o arquivo existe
- Use caminhos relativos (`./images/foto.jpg`)

**Cores não aparecem:**
- Verifique a sintaxe CSS
- Confirme que as variáveis estão definidas
- Use códigos hex válidos (`#ffffff`)

**Site não responsivo:**
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador
- Verifique media queries no CSS

**JavaScript não funciona:**
- Abra o console do navegador (F12)
- Verifique erros de sintaxe
- Confirme que todos os arquivos estão linkados

---

**🎉 Parabéns! Agora você tem um portfólio profissional e personalizado!**

Para dúvidas ou sugestões, sempre consulte a documentação ou comunidades de desenvolvedores.