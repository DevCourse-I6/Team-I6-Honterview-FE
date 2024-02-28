import Button from '@/components/button';

const AnswerFinishButton = () => {
  return (
    <Button
      type="submit"
      style={{ width: 'auto', height: 'auto', padding: '0.5rem 1rem' }}
      className="text-small text-white md:text-medium"
    >
      답변 완료
    </Button>
  );
};

export default AnswerFinishButton;
