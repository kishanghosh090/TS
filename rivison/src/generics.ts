function wrapInarray<T>(item: T): T[] {
  return [item];
}

wrapInarray("masala");
wrapInarray(42);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("elychi", 20);

interface Box<T> {
  content: T;
  name: string;
}

const numberBox: Box<string> = {
  content: "",
  name: "",
};

interface ApiPromise<T> {
  status: number;
  data: T | undefined;
  err?: Error;
}
