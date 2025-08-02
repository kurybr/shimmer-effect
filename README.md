# ShimmerJS

Uma biblioteca completa de efeitos shimmer e glass para CSS/SCSS, com foco em animações elegantes e acessibilidade.

## 🚀 Características

- **Efeitos Shimmer Avançados** - Usando `background-clip: text`
- **Apple Intelligence** - Cores oficiais da Apple
- **Múltiplas Direções** - Horizontal, vertical e diagonal
- **Variações de Cores** - Rainbow, gold, silver, neon, purple
- **Elementos Não-Texto** - Cards, botões, avatares, linhas
- **Acessibilidade** - Respeita `prefers-reduced-motion`
- **Responsivo** - Funciona em todos os dispositivos
- **Performance** - Animações otimizadas

## 📦 Instalação

```bash
npm install @hotina/shimmerjs
```

## 🎯 Uso

### CSS/SCSS

```scss
// Importar o arquivo SCSS
@import '@hotina/shimmerjs/src/shimmer.scss';

// Ou importar o CSS compilado
@import '@hotina/shimmerjs/dist/shimmer.css';
```

### HTML

```html
<!-- Shimmer básico -->
<h1 class="ai-analyzing">Carregando...</h1>

<!-- Apple Intelligence -->
<h1 class="ai-apple-intelligence">Apple Intelligence</h1>

<!-- Purple variant -->
<h1 class="ai-apple-intelligence-purple">Purple Shimmer</h1>

<!-- Elementos -->
<div class="ai-shimmer-card ai-shimmer-lg"></div>
<button class="ai-shimmer-button">Clique aqui</button>
```

## 🎨 Efeitos Disponíveis

### Shimmer de Texto

#### Básico
- `.ai-analyzing` - Horizontal (esquerda → direita)
- `.ai-analyzing-y` - Vertical (baixo → cima)
- `.ai-analyzing-diagonal` - Diagonal (45°)

#### Variações de Cor
- `.ai-rainbow` - Arco-íris
- `.ai-gold` - Dourado
- `.ai-silver` - Prateado
- `.ai-neon` - Neon

#### Apple Intelligence
- `.ai-apple-intelligence` - Cores oficiais Apple
- `.ai-apple-intelligence-y` - Vertical
- `.ai-apple-intelligence-diagonal` - Diagonal
- `.ai-apple-intelligence-soft` - Suave

#### Purple Variant
- `.ai-apple-intelligence-purple` - Purple-800 → Preto
- `.ai-apple-intelligence-purple-y` - Vertical
- `.ai-apple-intelligence-purple-diagonal` - Diagonal
- `.ai-apple-intelligence-purple-soft` - Suave

### Shimmer Avançado

- `.ai-shimmer-gradient` - Gradiente complexo
- `.ai-shimmer-multi` - Múltiplas faixas
- `.ai-shimmer-wave` - Efeito onda
- `.ai-shimmer-pulse-text` - Pulso no texto
- `.ai-shimmer-typewriter` - Efeito digitação
- `.ai-shimmer-glitch` - Efeito glitch
- `.ai-shimmer-hologram` - Efeito holograma

### Elementos Não-Texto

- `.ai-shimmer-card` - Cards/divs
- `.ai-shimmer-button` - Botões
- `.ai-shimmer-avatar` - Avatares
- `.ai-shimmer-line` - Linhas de texto

### Utilitários

#### Tamanhos
- `.ai-shimmer-sm` - Pequeno
- `.ai-shimmer-md` - Médio
- `.ai-shimmer-lg` - Grande
- `.ai-shimmer-xl` - Extra grande

#### Cores
- `.ai-shimmer-primary` - Azul
- `.ai-shimmer-success` - Verde
- `.ai-shimmer-warning` - Laranja
- `.ai-shimmer-danger` - Vermelho
- `.ai-shimmer-dark` - Escuro
- `.ai-shimmer-light` - Claro

#### Velocidades
- `.ai-analyzing-slow` - Lento (3s)
- `.ai-analyzing-fast` - Rápido (0.8s)
- `.ai-analyzing-pulse` - Pulse (2s)

## 🎛️ Customização

### CSS Variables

```css
:root {
  --base: #9aa3af;           /* Cor base */
  --speed: 1.6s;             /* Velocidade */
  --shimmer-opacity: 0.85;   /* Opacidade do brilho */
  --shimmer-width: 18%;      /* Largura da faixa */
}
```

### Exemplo de Customização

```scss
.my-custom-shimmer {
  --base: #ff6b6b;
  --speed: 2s;
  --shimmer-opacity: 0.9;
  
  @extend .ai-analyzing;
}
```

## 📱 Responsividade

O pacote inclui media queries para dispositivos móveis:

```scss
@media (max-width: 768px) {
  .ai-shimmer-card {
    min-height: 150px;
  }
  
  .ai-shimmer-avatar {
    width: 50px;
    height: 50px;
  }
}
```

## ♿ Acessibilidade

Respeita as preferências do usuário:

```scss
@media (prefers-reduced-motion: reduce) {
  .ai-analyzing,
  .ai-apple-intelligence,
  /* ... todas as classes */
  {
    animation: none;
  }
}
```

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Build para produção
npm run build

# Build para desenvolvimento
npm run build:dev

# Watch mode
npm run watch
```

### Estrutura do Projeto

```
shimmerjs/
├── src/
│   └── shimmer.scss      # Código fonte
├── dist/
│   └── shimmer.css       # CSS compilado
├── package.json
└── README.md
```

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/hotina/shimmerjs/issues)
- **Email**: support@hotina.com

---

Desenvolvido com ❤️ pela equipe Hotina 