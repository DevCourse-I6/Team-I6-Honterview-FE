import { useCallback, useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import useInterviewProgress from '@/stores/interviewProgress';

const useSpeechToText = () => {
  const { answerContent, setInterview } = useInterviewProgress((state) => ({
    answerContent: state.interview.answerContent,
    setInterview: state.setInterview,
  }));
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] =
    useState<SpeechRecognition | null>(null);

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
      setInterview({ answerContent: answerContent + transcript });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterview, transcript, listening]);

  useEffect(() => {
    startListening();

    return () => {
      stopListening();
    };
  }, [startListening, stopListening]);

  return { answerContent, listening };
};

export default useSpeechToText;
