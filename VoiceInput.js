import React from 'react';
import { Button, View, Alert } from 'react-native';
// Optional voice input (works online)
import * as Speech from 'expo-speech';
import * as SpeechRecognition from 'expo-speech'; // Placeholder since expo-speech doesn't support recognition

export default function VoiceInput({ onSpeechResult }) {
  const sampleQuestions = [
    "What is 5 plus 3?",
    "What is the area of square?",
    "What is 12 minus 4?"
  ];

  const handleVoiceInput = () => {
    Alert.alert("Voice Input", "Voice input is not available offline. Please use buttons.");
    // This is a placeholder. Actual voice recognition requires integration with a speech-to-text API.
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Button title="🎤 Speak Your Question (Online)" onPress={handleVoiceInput} />
      {sampleQuestions.map((q, index) => (
        <Button key={index} title={q} onPress={() => onSpeechResult(q)} />
      ))}
    </View>
  );
}