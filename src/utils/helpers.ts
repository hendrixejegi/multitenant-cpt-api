export const createExamCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  return code;
};

export const getTenantId = (): string => {
  return 'tenant_id';
};
