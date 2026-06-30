import { Mic, MicOff } from "lucide-react";
import useVoiceCommand from "../hooks/useVoiceCommand";

function VoiceCommandButton({ onCommand }) {
  const { isListening, transcript, error, startListening, stopListening } =
    useVoiceCommand((finalText) => {
      onCommand(finalText);
    });

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-3 rounded-full transition ${
          isListening
            ? "bg-red-500 animate-pulse"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        {isListening ? <Mic size={20} /> : <MicOff size={20} />}
      </button>

      {transcript && (
        <span className="text-sm text-zinc-400 italic">"{transcript}"</span>
      )}

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

export default VoiceCommandButton;