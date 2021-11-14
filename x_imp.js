const merge = (leftArr, rightArr) => {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sorted.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      sorted.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return sorted
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const swap = (arr, val1, val2) => {
  let tmp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = arr[tmp];
};

const partition = (arr, left, right) => {
  const pivot = Math.floor(left + (right - left) / 2);
  const pivotValue = arr[pivot];
  [arr[pivot], arr[left]] = [arr[left], arr[pivot]];
  let part = left;

  for (let i in arr) {
    if (arr[i] < pivotValue) {
      part += 1;
      [arr[i], arr[part]] = [arr[part], arr[i]];
    }
  }
  [arr[left], arr[part]] = [arr[part], arr[left]];
  return part;
};

const quickSort = (arr, left, right) => {
  if (arr.length < 2) return;

  if (left < right) {
    let part = partition(arr, left, right);
    quickSort(arr, left, part - 1);
    quickSort(arr, part + 1, right);
  }
  return arr;
};

let arr1 = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(mergeSort(arr1));
console.log(quickSort(arr1, 0, arr1.length - 1));
