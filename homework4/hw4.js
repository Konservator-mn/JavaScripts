function fibo(n) {
   let limit = Math.abs(n);
   let sign = n<0 ? Math.pow(-1, limit): 1;
   return function fiboInner(n) {
       return n>2?fibo(Math.abs(n)-1)+fibo(Math.abs(n)-2):1;
   }
}