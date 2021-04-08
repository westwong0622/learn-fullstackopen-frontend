const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText,  a * b);
}

multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');

type Operation = 'multiply' | 'add' | 'divide';
type Result = number;

const calculator = (a: number, b: number, op : Operation): Result => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if( b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}

try {
  console.log(calculator(1, 4 , 'divide'))
  console.log(calculator(0, 4 , 'divide'))
  console.log(calculator(4, 0 , 'divide'))
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}
