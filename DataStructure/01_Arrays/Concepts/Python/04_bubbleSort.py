def bubblesort(arr):
    n = len(arr)
    for i in range(n-1):
        swapped = False
        for j in range (n-1-i):
            if arr[j] > arr [j+1]:
                #swap elements
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

print(bubblesort([52,12,46,7,46,2,22,56]))