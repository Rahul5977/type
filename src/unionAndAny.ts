let apirequest: 'pending' | 'success' | 'failed';
apirequest = 'pending';

let currentstatus;
currentstatus = 'success';
currentstatus = 1
//avoid using any type
let userinput: any;
userinput = 'rahulraj';
userinput = 5;
userinput = true;

//better way to handle any type is using unknown type
let userinput1: unknown;
userinput1 = 'rahulraj';
userinput1 = 5;
userinput1 = true;

(userinput1 as string).toUpperCase();