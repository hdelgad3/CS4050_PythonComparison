import time
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

def python_imp_main():
    list1 = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    sTime1 = time.time()
    print(mergeSort(list1))
    print(time.time() - sTime1)

    sTime2 = time.time()
    print(quickSort(list1, 0, len(list1) - 1))
    print(time.time() - sTime2)

    list20 = random.sample(range(0,20),20)
    print("merge sort: \n", mergeSort(list20))
    print("quick sort: \n", quickSort(list20, 0, len(list20) - 1))

    list100 = random.sample(range(0,100),100)
    print("merge sort: \n", mergeSort(list100))
    print("quick sort: \n", quickSort(list100, 0, len(list100) - 1))

    list500 = random.sample(range(0,500),500)
    print("merge sort: \n", mergeSort(list500))
    print("quick sort: \n", quickSort(list500, 0, len(list500) - 1))

    list1000 = random.sample(range(0,1000),1000)
    print("merge sort: \n", mergeSort(list1000))
    print("quick sort: \n", quickSort(list1000, 0, len(list1000) - 1))

    list10000 = random.sample(range(0,10000),10000)
    print("merge sort: \n", mergeSort(list10000))
    print("quick sort: \n", quickSort(list10000, 0, len(list10000) - 1))

if __name__ == '__main__':
    python_imp_main()