const world = 'South Korea';

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}

console.log(hello(world));