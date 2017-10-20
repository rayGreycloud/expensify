const add = (a, b) => {
  return a + b;
};

const generateGreeting = (name = 'Friend') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test('should generate greeting using provided name value', () => {
  const result = generateGreeting('Darth');
  expect(result).toBe('Hello Darth');
});

test('should generate greeting using default name value', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Friend');
});