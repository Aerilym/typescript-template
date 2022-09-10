export type ExampleType = 'foo' | 'bar' | 'baz';

export interface ExampleInterface {
  exampleString: ExampleType;
  exampleNumber: number;
  exampleBoolean: boolean;
  exampleObject: {
    exampleString: string;
    exampleNumber: number;
    exampleBoolean: boolean;
  };
}
