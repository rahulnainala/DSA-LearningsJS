#works well on unsorted Array.
#Time Complexity => O(n)

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return  -1

print("The location of the target value is ",linear_search([10,20,30,50,40],50))