/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
    extend: {
      // 1. DEFINIÇÃO DOS KEYFRAMES (O movimento da animação)
      keyframes: {
        // Animação para a entrada suave do modal
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Animação lenta de 'respiração' para a coroa
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-8%)' }, // Começa e termina um pouco mais alto
          '50%': { transform: 'translateY(0)' },        // Ponto mais baixo
        },
      },
      
      // 2. APLICAÇÃO DOS KEYFRAMES (Como as classes usam o movimento)
      animation: {
        // Modal: Entrada suave de 0.3 segundos
        'fade-in': 'fade-in 0.3s ease-out forwards',
        // Coroa: Movimento lento e infinito de 2 segundos
        'bounce-slow': 'bounce-slow 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

  