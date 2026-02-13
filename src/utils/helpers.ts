const createExamCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  return code;
};

module.exports = {
  createExamCode,
};
