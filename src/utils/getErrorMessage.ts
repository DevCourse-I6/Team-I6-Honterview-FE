const getErrorMessage = () => {
  const accessToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('errorMessage='))
    ?.split('=')[1];

  return decodeURIComponent(accessToken || '');
};

export default getErrorMessage;
