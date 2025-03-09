def two_sum_sorted(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        sum = arr[left] + arr[right]
        if sum == target:
            return [arr[left],arr[right]]
        elif sum < target:
            left +=1
        else:
            right-=1

    return []


print(two_sum_sorted([1, 2, 3, 4, 6, 8, 9], 10))  # Output: [2, 8]
