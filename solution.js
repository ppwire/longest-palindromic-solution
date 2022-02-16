const str = "eteereenal"

function findLongestPalindromic(str) {
   if (str.length < 2) return str

   let resultStart = 0
   let resultLength = 0

   function expand(str, left, right) {
      while (left >= 0 && right < str.length && str[left] === str[right]) {
         left--;
         right++;
      }
      if (resultLength < (right - 1) - (left + 1) + 1) {
         resultStart = left + 1
         resultLength = (right - 1) - (left + 1) + 1
      }
   }

   for (let i = 0; i < str.length; i++) {
      expand(str, i, i)
      expand(str, i, i + 1)
   }
   
   return str.substring(resultStart, resultStart + resultLength)
}

console.log(findLongestPalindromic(str))

