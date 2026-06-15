import { useState, useEffect } from "react";

export function usePortfolioVoiceReader() {
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        }
    }, []);

    const startReading = () => {
        //cancels active speech first to avoid overlaps
        window.speechSynthesis.cancel();

        //function to grab texts to be read loud
        const mainContent = document.getElementById("main-content")?.innerText || "";

        //introductory text
        const introText = "Welcome to Mara's portfolio. " + (mainContent ? mainContent : "");

        const utterance = new SpeechSynthesisUtterance(introText);

        const voices = window.speechSynthesis.getVoices();

        // Attempt to find a standard Google, Microsoft, or Apple voice profile
        // You can filter by name patterns like "Google US English", "Samantha", or "Zira"
        const preferredVoice = voices.find(voice => 
        voice.name.includes("Google US English") || voice.name.includes("Zira")
        );

        if (preferredVoice) {
        utterance.voice = preferredVoice;
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance)
    };

    const stopReading = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    const toggleVoice = () => {
        if (isSpeaking) {
            stopReading();
        } else {
            startReading();
        }
    };

    return { isSpeaking, toggleVoice, startReading, stopReading }
}