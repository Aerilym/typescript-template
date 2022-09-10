import type { ExampleInterface } from './types';

async function exampleFunction(input: ExampleInterface): Promise<ExampleInterface> {
  const newObject: ExampleInterface = { ...input, exampleString: 'foo' };
  return newObject;
}

async function trigger() {
  const exampleObject: ExampleInterface = {
    exampleString: 'bar',
    exampleNumber: 1,
    exampleBoolean: true,
    exampleObject: {
      exampleString: 'example string',
      exampleNumber: 2,
      exampleBoolean: false,
    },
  };

  const response = await exampleFunction(exampleObject);
}

trigger();
