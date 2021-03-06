package main

import "fmt"

// TLE
func countPrimes(n int) int {
	if n < 3 {
		return 0
	} else if n == 3 {
		return 1
	}
	result := 0
	for i := 2; i < n; i++ {
		// check if prime
		isPrime := true
		for j := 2; j < i; j++ {
			if i%j == 0 {
				isPrime = false
				break
			}
		}
		if isPrime {
			result++
		}
	}
	return result
}

//	learned from the others:
//	1. hashtable for not-primes
//	2. for each number, set it multiples as noPrimes to speed up the further calculations
func countPrimes1(n int) int {
	if n < 2 {
		return 0
	}
	notPrime := make(map[int]bool)
	count := 0
	for i := 2; i < n; i++ {
		_, e := notPrime[i]
		if !e {
			count++
			for j := 2; i*j < n; j++ {
				notPrime[i*j] = true
			}
		}
	}
	return count
}

//	optimization the hashtable approach: replace arr instead of hashtable to preclude the hashing calculation
//	1. dummy arry for not-primes
//	2. for each number, set it multiples as noPrimes to speed up the further calculations
func countPrimes2(n int) int {
	if n < 2 {
		return 0
	}
	notPrime := make([]bool, n)
	count := 0
	for i := 2; i < n; i++ {
		if !notPrime[i] {
			count++
			for j := 2; i*j < n; j++ {
				notPrime[i*j] = true
			}
		}
	}
	return count
}

func main() {
	// 499979
	fmt.Println(countPrimes2(499979))
}
