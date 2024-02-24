import { VideoHTMLAttributes } from 'react';

export interface VideoViewProps extends VideoHTMLAttributes<HTMLVideoElement> {
  videoUrl: string;
  error?: string;
}

export interface VideoPreviewProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  stream: MediaStream | null;
  isLoading: boolean;
  error?: string;
}

export interface CameraErrorViewProps {
  error?: string;
}
