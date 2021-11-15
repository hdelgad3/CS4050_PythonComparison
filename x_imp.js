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

let arr1 = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(mergeSort(arr1));
console.log(quickSort(arr1, 0, arr1.length - 1));

const arr20 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
console.log("merge sort: \n" + mergeSort(arr20));
console.log("quick sort: \n" + quickSort(arr20, 0, arr20.length - 1));

const arr100 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("merge sort: \n" + mergeSort(arr100));
console.log("quick sort: \n" + quickSort(arr100, 0, arr100.length - 1));

const arr500 = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * 500)
);
console.log("merge sort: \n" + mergeSort(arr500));
console.log("quick sort: \n" + quickSort(arr500, 0, arr500.length - 1));

const arr1000 = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);
console.log("merge sort: \n" + mergeSort(arr1000));
console.log("quick sort: \n" + quickSort(arr1000, 0, arr1000.length - 1));

const arr10000 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);
console.log("merge sort: \n" + mergeSort(arr10000));
console.log("quick sort: \n" + quickSort(arr10000, 0, arr10000.length - 1));
