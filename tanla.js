/*

- array of size n
- majority element - max frequency - n/2
[1, 2, 1, 1, 1, 2] - 1

- return -1
Brute force-
- maxCount
- loop
    - cache
    - increment map
    - maxCount = Math.max(value, maxCount)
O(n)
O(1)
O(n ^ 2) -> nlogn
- loop
    - element = array[i]
    - loop
        - 
sort - nlogn
[1, 2, 1, 1, 1, 2]
[1, 1, 1, 1, 2, 2]
[1, 1, 1, 2, 2, 2, 2, 3] - 3
logn

- loop
    - element = array[i]
    - while(array[i] != array[i + 1])
        count++
    - i = count

nlogn

[1, 1, 1, 2, 3]
- loop - i = 0
    - element = 1
    while(array[i] != array[i + 1]) {
        i++
    }
            0
         /     \
        1        2
      /   \    /  \
    3      4  5    6
              /
             7

-----
PS:
[
0    [1, 2],
1    [0, 3, 4],
2    [0, 5, 6],
3    [1],
4    [1],
5    [2, 7],
6    [2],
7    [5]
]
[1, 1, 1, 1, 1, 1, 1, 1];
queue = []

- loop through child
    - add queue

1 -> 3,4


3000 bananas
a -> b
1000km
1k - banana
1000 bananas - limit
0  -  1000
1000 300

*/




