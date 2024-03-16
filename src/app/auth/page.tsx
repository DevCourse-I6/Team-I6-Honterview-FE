import Loading from '@/components/loading';

const AuthPage = async () => {
  return (
    <div className="fit-wrap">
      <Loading />
    </div>
  );
};

export default AuthPage;

// 도메인 다르면 토큰 재발급 500에러 뜨는지?
// 페이지 이동 시 자동으로 refresh 되는지? 되면 메인이든 로그인이든 어디로 보내도 된다.
// 안되면 로그인 페이지 올 때마다 fresh
