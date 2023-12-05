def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []
    else:
        countPositives = 0
        sumNegatives = 0
        for x in arr:
            if x > 0:
                countPositives += 1
            elif x < 0:
                sumNegatives = sumNegatives + x
        return [countPositives, sumNegatives]

print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
