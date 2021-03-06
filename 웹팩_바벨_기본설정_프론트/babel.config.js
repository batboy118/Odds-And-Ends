module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11' },
        useBuiltIns: 'usage', // 폴리필 사용 방식 지정
        corejs: {
          version: 3,
        },
      },
    ],
  ];

  return {
    presets,
  };
};
