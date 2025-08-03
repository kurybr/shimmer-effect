/**
 * ShimmerJS - Biblioteca de Efeitos Shimmer
 * 
 * Este arquivo serve como ponto de entrada principal para o pacote.
 * Para usar com CSS/SCSS, importe diretamente o arquivo .scss ou .css.
 */

// Exporta informações sobre o pacote
export const version = '1.0.0';
export const name = '@hotina/shimmerjs';

// Lista de todas as classes disponíveis
export const classes = {
  // Shimmer básico
  basic: {
    horizontal: 'ai-analyzing',
    vertical: 'ai-analyzing-y',
    diagonal: 'ai-analyzing-diagonal'
  },
  
  // Variações de cor
  colors: {
    rainbow: 'ai-rainbow',
    gold: 'ai-gold',
    silver: 'ai-silver',
    neon: 'ai-neon'
  },
  
  // Apple Intelligence
  apple: {
    default: 'ai-apple-intelligence',
    vertical: 'ai-apple-intelligence-y',
    diagonal: 'ai-apple-intelligence-diagonal',
    soft: 'ai-apple-intelligence-soft'
  },
  
  // Purple variant
  purple: {
    default: 'ai-apple-intelligence-purple',
    vertical: 'ai-apple-intelligence-purple-y',
    diagonal: 'ai-apple-intelligence-purple-diagonal',
    soft: 'ai-apple-intelligence-purple-soft'
  },
  
  // Shimmer avançado
  advanced: {
    gradient: 'ai-shimmer-gradient',
    multi: 'ai-shimmer-multi',
    wave: 'ai-shimmer-wave',
    pulseText: 'ai-shimmer-pulse-text',
    typewriter: 'ai-shimmer-typewriter',
    glitch: 'ai-shimmer-glitch',
    hologram: 'ai-shimmer-hologram'
  },
  
  // Elementos
  elements: {
    card: 'ai-shimmer-card',
    button: 'ai-shimmer-button',
    avatar: 'ai-shimmer-avatar',
    line: 'ai-shimmer-line'
  },
  
  // Utilitários
  utilities: {
    sizes: {
      sm: 'ai-shimmer-sm',
      md: 'ai-shimmer-md',
      lg: 'ai-shimmer-lg',
      xl: 'ai-shimmer-xl'
    },
    colors: {
      primary: 'ai-shimmer-primary',
      success: 'ai-shimmer-success',
      warning: 'ai-shimmer-warning',
      danger: 'ai-shimmer-danger',
      dark: 'ai-shimmer-dark',
      light: 'ai-shimmer-light'
    },
    speeds: {
      slow: 'ai-analyzing-slow',
      fast: 'ai-analyzing-fast',
      pulse: 'ai-analyzing-pulse'
    }
  }
};

// Função para aplicar shimmer a um elemento
export function applyShimmer(element, className) {
  if (element && className) {
    element.classList.add(className);
    return true;
  }
  return false;
}

// Função para remover shimmer de um elemento
export function removeShimmer(element, className) {
  if (element && className) {
    element.classList.remove(className);
    return true;
  }
  return false;
}

// Função para criar elemento com shimmer
export function createShimmerElement(tag = 'div', className = 'ai-shimmer-card') {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

// Função para aplicar shimmer a múltiplos elementos
export function applyShimmerToElements(selector, className) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    applyShimmer(element, className);
  });
  return elements.length;
}

// Configurações padrão
export const config = {
  baseColor: '#9aa3af',
  speed: '1.6s',
  shimmerOpacity: 0.85,
  shimmerWidth: '18%'
};

// Função para atualizar configurações CSS
export function updateConfig(newConfig) {
  const root = document.documentElement;
  
  if (newConfig.baseColor) {
    root.style.setProperty('--base', newConfig.baseColor);
  }
  
  if (newConfig.speed) {
    root.style.setProperty('--speed', newConfig.speed);
  }
  
  if (newConfig.shimmerOpacity) {
    root.style.setProperty('--shimmer-opacity', newConfig.shimmerOpacity);
  }
  
  if (newConfig.shimmerWidth) {
    root.style.setProperty('--shimmer-width', newConfig.shimmerWidth);
  }
}



// Exporta tudo como default
export default {
  version,
  name,
  classes,
  applyShimmer,
  removeShimmer,
  createShimmerElement,
  applyShimmerToElements,
  config,
  updateConfig
}; 