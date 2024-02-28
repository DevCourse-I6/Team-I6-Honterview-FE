export interface IErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
