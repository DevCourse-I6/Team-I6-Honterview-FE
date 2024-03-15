import { GithubIcon, GoogleIcon, KakaoIcon } from '@/components/icon';

export const LOGIN_BUTTONS = [
  {
    provider: 'github',
    name: '깃허브 로그인',
    icon: <GithubIcon />,
    backgroundColor: 'bg-[#ffffff]',
    textColor: 'text-text-100',
  },
  {
    provider: 'google',
    name: '구글 로그인',
    icon: <GoogleIcon />,
    backgroundColor: 'bg-[#ffffff]',
    textColor: 'text-text-100',
  },
  // {
  //   provider: 'naver',
  //   name: '네이버 로그인',
  //   icon: <NaverIcon />,
  //   backgroundColor: 'bg-[#03C75A]',
  //   textColor: 'text-text-20',
  // },
  {
    provider: 'kakao',
    name: '카카오 로그인',
    icon: <KakaoIcon />,
    backgroundColor: 'bg-[#FEE500]',
    textColor: 'text-text-100',
  },
];
