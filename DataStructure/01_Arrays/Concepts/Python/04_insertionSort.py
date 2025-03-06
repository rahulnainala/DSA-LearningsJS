def insertion_sort(arr):
    n = len(arr)
    for i in range(n-1):
        key = arr[i]
        j = i-1
        while j>=0 and arr[j]>key:
            arr[j+1] = arr[j]
            j-=1
        arr[j+1] = key
    return arr

print(insertion_sort([123,45,1,3,3,61,11,5]))
