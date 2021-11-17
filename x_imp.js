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
  let start = new Date();
  let left = 0;
  let right = arr.length - 1;
  let sorted = [];
  for (let i = 0; i <= 15; i++) {
    sorted = quickSort(arr, left, right);
  }
  let stop = (new Date() - start) / 1000;
  return [sorted, stop];
};

const timeMergeSort = (arr) => {
  let start = new Date();
  let sorted = [];
  for (let i = 0; i <= 15; i++) {
    sorted = mergeSort(arr);
  }
  let stop = (new Date() - start) / 1000;
  return [sorted, stop];
};

const arr1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

const arr20 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

const arr100 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

const arr500 = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * 500)
);

const arr1000 = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);

const arr10000 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

const arr100000 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);

const arr500000 = Array.from({ length: 500000 }, () =>
  Math.floor(Math.random() * 500000)
);

const arr1000000 = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);

const arr5000000 = Array.from({ length: 5000000 }, () =>
  Math.floor(Math.random() * 5000000)
);

const cont = [
  arr1,
  arr20,
  arr100,
  arr500,
  arr1000,
  arr10000,
  arr100000,
  arr500000,
  arr1000000,
  arr5000000,
];

for (let i of cont) {
  console.log(`Merge sort of ${i.length}: ` + timeMergeSort(i)[1]);
  console.log(
    `Quick sort of ${i.length}: ` + timeQuickSort(i, 0, i.length - 1)[1]
  );
}
