/** product: calculate the product of an array of numbers. */

function product(nums) {
  return nums.length > 0 ? nums[0] * product(nums.splice(1)) : 1

}

/** longest: return the length of the longest word in an array of words. */
// ["hello", "hi", "hola"]
function longest(words, longestCount = 0) {

  if (words[0].length > longestCount) {
    longestCount = words[0].length
  }
  if (words.slice(1).length > 0) {
    return longest(words.slice(1), longestCount)
  } else {
    return longestCount
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, returnStr = '') {
  //take the first letter, cut out 2 letters, return the first letter, cut out 2 letters
  if (str.length < 1) {
    return returnStr
  } else {
    returnStr += str[0]
    return everyOther(str.slice(2), returnStr)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */


function isPalindrome(str, strBkd = '', slicedStr = '') {
  if (slicedStr == '') {
    slicedStr = str
  }
  if (strBkd.length == str.length) {
    //compare and return
    return strBkd == str ? true : false
  } else {
    strBkd += slicedStr[slicedStr.length - 1]
    return isPalindrome(str, strBkd, slicedStr.slice(0, -1))
  }
  //take last letter, add it to the string and cut out the first letter and pass it again
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[0] == val) {
    return i
  } else if (arr.length < 1) { return -1 }
  else {
    return findIndex(arr.slice(1), val, i + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, strBkd = '', slicedStr = '') {
  if (slicedStr == '') {
    slicedStr = str
  }
  if (strBkd.length == str.length) {
    //compare and return
    return strBkd
  } else {
    strBkd += slicedStr[slicedStr.length - 1]
    return revString(str, strBkd, slicedStr.slice(0, -1))
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {

  Object.keys(obj).forEach(e => {
    if (typeof (obj[e]) == 'string') {
      arr.push(obj[e])
    } else if (typeof obj[e] === "object" && !Array.isArray(obj[e])) {
      return gatherStrings(obj[e], arr)
    }
  })
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0, left = 0, right = arr.length - 1) {
  i = Math.floor((left + right) / 2)
  while (left <= right) {
    if (arr[i] == val) {
      return i
    } else if (arr[i] > val) {
      right = i - 1
    } else if (arr[i] < val) {
      left = i + 1
    }
    return binarySearch(arr, val, i, left, right)
  }
  return -1
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
