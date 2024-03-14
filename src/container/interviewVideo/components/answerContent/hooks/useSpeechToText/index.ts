import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import { useAnswerContent } from '@/stores/interviewProgress';

const useSpeechToText = () => {
  const { answerContent, setAnswerContent } = useAnswerContent();
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] =
    useState<SpeechRecognition | null>(null);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setAnswerContent(value);
  };

  const startListening = useCallback(() => {
    if (speechRecognition && !listening) {
      setTranscript('');
      speechRecognition.start();
    }
  }, [speechRecognition, listening]);

  const stopListening = useCallback(() => {
    if (speechRecognition && listening) {
      setListening(false);
      speechRecognition.stop();
    }
  }, [speechRecognition, listening]);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      return notify(
        'warning',
        '현재 브라우저에서 음성 인식은 지원하지 않습니다.',
      );
    }

    const recognition = new window.webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'ko-KR';

    recognition.onresult = (event) => {
      const { resultIndex, results } = event;

      for (let i = resultIndex; i < results.length; i += 1) {
        if (results[i].isFinal) {
          setTranscript(results[i][0].transcript);
        }
      }
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onstart = () => {
      setListening(true);
    };

    setSpeechRecognition(recognition);
  }, []);

  useEffect(() => {
    if (transcript && listening) {
      setAnswerContent(answerContent + transcript);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAnswerContent, transcript, listening]);

  useEffect(() => {
    startListening();

    return () => {
      stopListening();
    };
  }, [startListening, stopListening]);

  useEffect(() => {
    if (speechRecognition) {
      notify('success', '음성 인식 활성화');
    }
  }, [speechRecognition]);

  return { answerContent, listening, handleTextChange };
};

export default useSpeechToText;
