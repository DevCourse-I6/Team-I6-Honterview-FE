import { useEffect, useState } from 'react';

const useCreateVideoDownloadUrl = (interviewVideoUrl: string) => {
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      const response = await fetch(interviewVideoUrl);
      const blobUrl = await response.blob();
      setDownloadUrl(window.URL.createObjectURL(blobUrl));
    };
    fetchDownloadUrl();
  }, [interviewVideoUrl]);

  return downloadUrl;
};

export default useCreateVideoDownloadUrl;
