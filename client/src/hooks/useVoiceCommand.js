import { useState, useEffect, useRef, useCallback } from "react";

function useVoiceCommand(onResult) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("voice: started listening");
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      console.log("voice: result event", event.results);
      const text = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join("");
      setTranscript(text);

      if (event.results[0].isFinal) {
        console.log("voice: final text ->", text);
        onResult && onResult(text);
      }
    };

    recognition.onerror = (event) => {
      console.log("voice: error ->", event.error);
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("voice: ended");
      setIsListening(false);
    };

    recognition.onspeechstart = () => console.log("voice: speech detected");
    recognition.onspeechend = () => console.log("voice: speech ended");
    recognition.onnomatch = () => console.log("voice: no match found");

    recognitionRef.current = recognition;

    return () => recognition.abort();
  }, [onResult]);

  const startListening = useCallback(() => {
    setTranscript("");
    setError(null);
    recognitionRef.current?.start();
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  return { isListening, transcript, error, startListening, stopListening };
}

export default useVoiceCommand;