function fibo (n) {
	return n?n>0?(n>2?fibo(n-1)+fibo(n-2):1):(n<-2?fibo(n+2)-fibo(n+1):Math.pow(-1, (1 - n)%2)):0;			
}