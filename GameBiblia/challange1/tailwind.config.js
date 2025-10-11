/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
// tailwind.config.js - NOVO CÓDIGO PARA A SEÇÃO 'extend'

extend: {
  // 1. DEFINIÇÃO DOS KEYFRAMES
  keyframes: {
    // Animação para a entrada dramática do modal
    'scale-up': {
      '0%': { opacity: '0', transform: 'scale(0.8)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    // Animação 'bounce-slow' (para o efeito de 'respiração' da coroa)
    'bounce-slow': {
      '0%, 100%': { transform: 'translateY(-10%)' }, // Movimento mais acentuado
      '50%': { transform: 'translateY(0)' },
    },
    // Animação 'spin-slow' para as estrelas de bônus
    'spin-slow': {
      'from': { transform: 'rotate(0deg)' },
      'to': { transform: 'rotate(360deg)' },
    },
  },
  
  // 2. APLICAÇÃO DOS KEYFRAMES
  animation: {
    // Modal: Entrada mais dramática (0.4s)
    'scale-up': 'scale-up 0.4s ease-out forwards',
    
    // Coroa: Movimento lento e infinito
    'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
    
    // Estrelas: Rotação lenta e infinita
    'spin-slow': 'spin-slow 5s linear infinite',
  },
  
  // 3. ADIÇÃO DE SHADOW NO TEXTO (Opcional, mas melhora o visual)
  // Se quiser essa sombra, pode ser necessário um plugin, ou você pode usar classes utilitárias.
  // Para simplificar, vou usar uma sombra sutil apenas com text-shadow
  // (OBS: text-shadow não é nativo do Tailwind, pode ser necessário um plugin)
  // Se não quiser usar plugin, remova a classe 'text-shadow-md' do H1.

},
  plugins: [],
}