//関数の使い方が明確化、厳格化する。
const sum = (val1: number, val2: number): number => {
  return val1 + val2;
};
const res1 = sum(1, 2);
const res2 = sum("2", "3");
console.log(res1, res2);

//未定義のプロパティにアクセスできない
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "テックん",
  age: 21,
};
console.log(user.email);

//厳密なnullチェックを行い、実行時エラーを防ぐ
const total = (numbers: number[] | null): number => {
  // if (!numbers) return 0;
  return numbers.reduce((p, c) => p + c, 0);
};
console.log(total);

//型を指定すれば修正した際警告文が表示

const func = (arg1: number) => {
  return;
};
func(1, 2);

//使用できるプロパティなどが補完され、タイプミスがなくなる
console.log(user.age);

//未指定の値を検知できる
// export const Form = () => {
//   return (
//     <form>
//     <Input label="名前"/>
//     <button type="button">送信</button>
//     </form>
//   );
// };

//string
let text: string = "文字列です";
text = "テキスト";
text = 1;
console.log(text);

//number
let count: number = 1;
count = 2;
count = "3";
console.log(count);

//boolean
let isAdmin: boolean = true;
isAdmin = false;
isAdmin = "true";
console.log(isAdmin);

//array
const messages: string[] = ["メッセージ１", "メッセージ２"];
messages.push("メッセージ３");
messages.push(1);

const scores: number[] = [80, 60];
scores.push(40);
scores.push("90");

const flags: Array<boolean> = [true, false, true];
const billings: Array<number> = [1000, 2300];
console.log(flags);
console.log(billings);

//null型/undefined型
const val3: null = null;
val3 = 1;

const val4: undefined = undefined;
val4 = "text";
console.log(val3);
console.log(val4);

//any型
let val5: any;
val5 = 1;
val5 = "文字列";
val5 = true;
val5 = null;
console.log(val5);

//void型
const registUserData = (userId: string, password: string): void => {
  console.log(userId, password);
};
registUserData();

//オブジェクトの型
const users: { name: string; age: number } = {
  name: "テックん",
  age: 20,
};
console.log(users.name);
console.log(users.age);
console.log(users.email);

//type/interface
const user1: { name: string; age: number } = {
  name: "ユーザー１",
  age: 20,
};
console.log(user1.name);
const user2: { name: string; age: number } = {
  name: "ユーザー２",
  age: 20,
};
console.log(user2.age);

type User3 = {
  name: string;
  age: number;
};
const user3: User3 = {
  name: "ユーザー１",
  age: 20,
};
console.log(user3.name);

interface User4 {
  name: string;
  age: number;
}
const user4: User4 = {
  name: "ユーザー１",
  age: 20,
};
console.log(user4.age);

//関数の型
type User5 = {
  name: string;
  age: number;
  greet: () => void;
};

const user5: User5 = {
  name: "テックん",
  age: 20,
  greet: () => console.log("テックんです"),
};
user5.greet();

//複合的な型intersection
type SampleA = {
  str: string;
  num: number;
};
type SampleB = {
  str: string;
  flg: boolean;
};
type SampleC = SampleA & SampleB;
const data: SampleC = {
  str: "テキスト",
  num: 1,
  flg: true,
};
console.log(data.str);

//複合的な型union
let val6: string | number;
val6 = "テキスト";
val6 = 1;
val6 = [];
console.log(val6);

type Result = "success" | "error";
const result: Result = "";
console.log(result);

//型アサーション:as
const user6: User = {} as User;
console.log(user6);

//暗黙的な型推論について
let num = 1;
num = "text"; //error
console.log(num);

const user7 = {
  name: "名前",
  age: 30,
};
console.log(user7.email); //error

//型推論により返り値は数値型
const sum1 = (a: number, b: number) => a + b;
let res = sum1(1, 2);
res = ""; //error
console.log(res);

//型ガード
type Foo = {
  foo: string;
  common: string;
};
type Bar = {
  bar: number;
  coomon: string;
};
const func1 = (arg: Foo | Bar) => {
  if ("foo" in arg) {
    console.log(arg.foo);
  } else {
    console.log(arg.bar);
  }
};
func1({ foo: "ccc", common: "ddd" });

//Optional
type User8 = {
  name: string;
  age: number;
  weight?: number;
};
const user8: User8 = {
  name: "テックん",
  age: 20,
};
console.log(user8.age);

//Optional
const deleteUser = (id: number, hardDeleate: boolean) => {
  console.log(id);
  if (hardDeleate) {
    return;
  }
};
deleteUser(1, true);

const deleteUser2 = (id: number, hardDeleate?: boolean) => {
  console.log(id);
  if (hardDeleate) {
    return;
  }
};
deleteUser2(1);
deleteUser2(2, true);

//ジェネリクス(型引数)
type Sample<T> = {
  value: T;
};
const val1: Sample<string> = {
  value: "テキスト",
};
const val2: Sample<string> = {
  value: 10,
};
console.log(val1);
console.log(val2);
//Partial<T>
type User6 = {
  name: string;
  age: number;
  address: string;
  phone: string;
};
type User7 = Partial<User>;
// type User7 = {
//    name?: string;
//    age?:number;
//    address?: string;
//    phone?: string;
// }

//Required<T>
type Person = {
  name?: string;
  age?: number;
};
type Person1 = Required<Person>;

//Readonly<T>
type Person2 = Readonly<Person>;

const person: Person2 = {
  name: "名前",
  age: 30,
};
person.name = "変更できない";

//Record<T, U>
type Person3 = Record<number, Person>;
const person3: Person3 = {
  1: {
    name: "名前",
    age: 30,
  },
};
console.log(person3);

//Pick<T, U>
type User9 = Pick<User, "name" | "age">;
const user9: User9 = {
  name: "名前",
  age: 20,
  address: "東京",
};
console.log(user9);

//Omit<T, U>
type User10 = Omit<User, "name">;
const user10: User10 = {
  name: "名前",
  age: 30,
  address: "",
  phone: "",
};
console.log(user10);
//ReturnType<T>
const getUser = (): User => {
  return user;
};
type TypeA = ReturnType<typeof getUser>;
