import timeit
import random


def merge(leftList,rightList):
    sorted = []
    leftIndex = 0
    rightIndex = 0

    while leftIndex < len(leftList) and rightIndex < len(rightList):
        if leftList[leftIndex] < rightList[rightIndex]:
            sorted.append(leftList[leftIndex])
            leftIndex += 1
        else:
            sorted.append(rightList[rightIndex])
            rightIndex += 1

    sorted = sorted + leftList[leftIndex:] + rightList[rightIndex:]
    return sorted

def mergeSort(aList):
    if len(aList) < 2:
        return aList

    midIndex = len(aList) // 2
    leftList = aList[:midIndex]
    rightList = aList[midIndex:]

    return merge(mergeSort(leftList), mergeSort(rightList))

def partition(aList, left, right):
    pivot = left + (right - left) // 2
    pivotValue = aList[pivot]
    aList[pivot], aList[left] = aList[left], aList[pivot]
    part = left

    for i in range(left, right + 1):
        if aList[i] < pivotValue:
            part += 1
            aList[i], aList[part] = aList[part], aList[i]
    aList[left], aList[part] = aList[part], aList[left]
    return part


def quickSort(aList, left, right):
    if len(aList) < 2:
        return


    if left < right:
        part = partition(aList,left, right)
        quickSort(aList, left, part - 1)
        quickSort(aList, part + 1, right)

    return aList

def time_quicksort(aList):
    left = 0
    right = len(aList) - 1
    result = quickSort(aList, left, right)

def time_mergesort(aList):
    result = mergeSort(aList)

def python_imp_main():
    list1 = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    list20 = random.sample(range(0,20),20)
    list100 = random.sample(range(0,100),100)
    list500 = random.sample(range(0,500),500)
    list1000 = random.sample(range(0,1000),1000)
    list10000 = random.sample(range(0,10000),10000)
    list100000 = random.sample(range(0,100000),100000)
    list500000 = random.sample(range(0,500000),500000)
    list1000000 = random.sample(range(0,1000000),1000000)
    cont = [list1, list20, list100, list500, list1000, list10000, list100000, list500000, list1000000]

    for i in cont:
        quick_time = timeit.timeit(lambda:  quickSort(i, 0, len(i) - 1), number = 15)
        print(f"Quick Sort Time for {len(i)} is {quick_time} seconds")
    
    for i in cont:
        merge_time = timeit.timeit(lambda:  mergeSort(i), number = 15)
        print(f"Merge Sort Time for {len(i)} is {merge_time} seconds")

    

if __name__ == '__main__':
    python_imp_main()