import { useState, useEffect, useCallback } from "react";

export function usePortfolioVoiceReader() {
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        }
    }, []);

    const startReading = useCallback(() => {
        //cancels active speech first to avoid overlaps
        window.speechSynthesis.cancel();

        //function to grab texts to be read loud
        const mainContent = document.getElementById("about-me")?.innerText || "";

        //introductory text
        const introText = "Welcome to Mara's portfolio. " + (mainContent ? mainContent : "");

        const utterance = new SpeechSynthesisUtterance(introText);

        const voices = window.speechSynthesis.getVoices(); 

        const preferredVoice = voices.find(voice => 
           voice.name.includes("Zira")
        );

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

       
        window.speechSynthesis.speak(utterance)
    }, []);

    const stopReading = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    }, []);

    const toggleVoice = useCallback(() => {
        if (isSpeaking) {
            stopReading();
        } else {
            startReading();
        }
    }, [isSpeaking, startReading, stopReading]);

    useEffect(() => {
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.getVoices();
        } 

       const runAutoplay = () => {
            window.speechSynthesis.cancel();
            
            const mainContent = document.getElementById("about-me")?.innerText || "";
            const introText = "Welcome to Mara's portfolio. " + (mainContent ? mainContent : "");
            const utterance = new SpeechSynthesisUtterance(introText);
            
            const voices = window.speechSynthesis.getVoices(); 
            const preferredVoice = voices.find(voice => voice.name.includes("Zira"));
            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        };

        runAutoplay();

        const handleFirstInteraction = () => {
            if (!window.speechSynthesis.speaking) {
                runAutoplay();;
            }
            cleanupListeners()
        };

        const cleanupListeners = () => {
            document.removeEventListener("click", handleFirstInteraction);
            document.addEventListener("touchstart", handleFirstInteraction);
        };

        document.removeEventListener("click", handleFirstInteraction);
        document.addEventListener("touchstart", handleFirstInteraction);

        return () => {
            window.speechSynthesis.cancel();
            cleanupListeners();
        }
    }, [startReading])


    return { isSpeaking, toggleVoice, startReading, stopReading }
}