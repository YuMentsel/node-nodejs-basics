const parseEnv = () => {
  const envArr = Object.entries(process.env).reduce((acc, [key, val]) => {
    if (key.startsWith('RSS_')) {
      return [...acc, `${key}=${val}`];
    }
    return acc;
  }, []);

  if (envArr.length) {
    console.log(envArr.join(', '));
  }
};

parseEnv();
