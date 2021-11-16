const { performance } = require("perf_hooks");
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

const partition = (arr, left, right) => {
  const pivot = Math.floor(left + (right - left) / 2);
  const pivotValue = arr[pivot];
  [arr[pivot], arr[left]] = [arr[left], arr[pivot]];
  let part = left;

  for (let i = left; i <= right; i++) {
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

const timeQuickSort = (arr) => {
  let start = performance.now();
  let left = 0;
  let right = arr.length - 1;
  const sorted = quickSort(arr, left, right);
  let stop = (performance.now() - start) / 1000;
  return [sorted, stop];
};

const timeMergeSort = (arr) => {
  let start = performance.now();
  const sorted = mergeSort(arr);
  let stop = (performance.now() - start) / 1000;
  return [sorted, stop];
};

let arr1 = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log("merge sort: \n" + timeMergeSort(arr1)[1]);
console.log("quick sort: \n" + timeQuickSort(arr1, 0, arr1.length - 1)[1]);

const arr20 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
console.log("merge sort: \n" + timeMergeSort(arr20)[1]);
console.log("quick sort: \n" + timeQuickSort(arr20, 0, arr20.length - 1)[1]);

const arr100 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("merge sort: \n" + timeMergeSort(arr100)[1]);
console.log("quick sort: \n" + timeQuickSort(arr100, 0, arr100.length - 1)[1]);

const arr500 = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * 500)
);
console.log("merge sort: \n" + timeMergeSort(arr500)[1]);
console.log("quick sort: \n" + timeQuickSort(arr500, 0, arr500.length - 1)[1]);

const arr1000 = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);
console.log("merge sort: \n" + timeMergeSort(arr1000)[1]);
console.log(
  "quick sort: \n" + timeQuickSort(arr1000, 0, arr1000.length - 1)[1]
);

const arr10000 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);
console.log("merge sort: \n" + timeMergeSort(arr10000)[1]);
console.log(
  "quick sort: \n" + timeQuickSort(arr10000, 0, arr10000.length - 1)[1]
);

const arr100000 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);
console.log("merge sort: \n" + timeMergeSort(arr100000)[1]);
console.log(
  "quick sort: \n" + timeQuickSort(arr100000, 0, arr100000.length - 1)[1]
);

const arr500000 = Array.from({ length: 500000 }, () =>
  Math.floor(Math.random() * 500000)
);
console.log("merge sort: \n" + timeMergeSort(arr500000)[1]);
console.log(
  "quick sort: \n" + timeQuickSort(arr500000, 0, arr500000.length - 1)[1]
);

const arr1000000 = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);
console.log("merge sort: \n" + timeMergeSort(arr1000000)[1]);
console.log(
  "quick sort: \n" + timeQuickSort(arr1000000, 0, arr1000000.length - 1)[1]
);
