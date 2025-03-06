arr = [10,20,30,40]

#Insert at the end O(1)
arr.append(50)

#Insert at index 2 O(n)
arr.insert(2, 25)

#Delete last element O(1)
arr.pop()

#Delete element at index 1 O(n)
del arr[1]

#Output : [10, 25, 30, 40]
print(arr)