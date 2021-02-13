//Generics Types
// Array
// Generics3: 2 generics, return, overwrite inference, default value


// you can explicitly give types like that

const Generics = (arr: Array<number>) => {
  return arr[arr.length - 1];
};

const G = Generics([1, 3, 4]);


// T is the type that will be passed in as array and :T (at end) gives the return type and
// while passing in the value, you can define the types 

const Generics2 = <T>(arr:T[]): T => {
  return arr[arr.length - 1];
}

const G2 = Generics2<string>(["s","f","g"]);


// passing multiple types   

const Generics3 = <X, Y = number>(x: X, y: Y): [X, Y]=> { // you can also give default types (Y)
  return [x, y];
};

const v  = Generics3(5, 6);
const v2 = Generics3("a", "d");
const v3 = Generics3("v", 6); // Tuple  (Tuple can contain two values of different data types.)
const v4 = Generics3< string | null, number >("m", 5); // you can also force the types
const v5 = Generics3< string >("r", 7);




// constraints are in extends as it will certainly have the property firstName and lastName 
const makeFullName =<T extends {firstName: string; lastName: string}>(obj: T) => {  
  return{
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  };
};

const v6 = makeFullName({firstName: 'sam', lastName: "hanna", age: 44 });

const v7 = makeFullName({person: 'sam', lastName: "hanna", age: 44 });
// now it will correctly keeping all the properties 
// of obj and also going to add the new property of fullName

interface fav<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = fav<number>; // now this will replace the data type of number with T 
// result
// type NumberTab = {
//   id: string;
//   position: number;
//   data: number;
// }
 