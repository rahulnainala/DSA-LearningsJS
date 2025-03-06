def merge_sort (arr):
    if len(arr)<=1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left,right)

def merge(left, right):
    sorted_array = []
    i=j=0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1
    return sorted_array + left[i:] + right[j:]

print(merge_sort([64, 34, 25, 12, 22, 11, 90]))
