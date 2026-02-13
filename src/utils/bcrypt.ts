import bcrypt from 'bcrypt';

async function hash(arg: string) {
  const result = await bcrypt.hash(arg, 10);
  return result;
}

export { hash };
