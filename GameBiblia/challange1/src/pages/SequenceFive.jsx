
import { FaCrown, FaCheckCircle } from 'react-icons/fa';

const SequenceFive = ({ onClose, streakCount }) => {
    
    const bonusText = (streakCount === 5) 
        ? "Você ganhou +1 palpite extra!" 
        : `Você mantém sua série de bônus!`;
        
    const titleText = (streakCount === 5) ? `${streakCount}ª CONSECUTIVA!` : `${streakCount} ACERTO EM SEQUÊNCIA!`;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            
          
            <div className="
                bg-green-50 p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-sm 
                border-4 border-yellow-500 transform transition-all duration-300 scale-100 
                animate-fade-in
            ">
                
                {/* Ícone de Coroa de Conquista */}
                <div className="flex justify-center mb-6">
                    <FaCrown className="text-yellow-500 text-5xl drop-shadow-lg animate-bounce-slow" />
                </div>

                {/* Título Principal */}
                <h1 className="
                    text-3xl md:text-4xl font-extrabold text-center mb-2 
                    text-green-800 uppercase tracking-widest
                ">
                    {titleText}
                </h1>

                {/* Subtítulo da Conquista */}
                <h2 className="text-lg text-center mb-6 text-gray-700 font-semibold">
                    {bonusText}
                </h2>

                {/* Botão de Continuar (Call to Action) */}
                <button 
                    onClick={onClose}
                    className="
                        w-full flex items-center justify-center space-x-2
                        bg-green-600 hover:bg-green-700 text-white font-bold 
                        py-3 px-6 rounded-lg transition duration-300 shadow-md 
                        shadow-green-500/50 uppercase text-lg
                    "
                >
                    <FaCheckCircle className="text-xl" />
                    <span>Continuar</span>
                </button>

            </div>
        </div>
    );
};

export default SequenceFive;

// OBS: 'animate-fade-in' e 'animate-bounce-slow' requerem configuração no tailwind.config.js para funcionar.