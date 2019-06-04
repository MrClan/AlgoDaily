"""
    1st approach: 2 pointers

    Time  O(n)
    Space O(1)
    188 ms, faster than 86.90%
"""


class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        i = 0
        j = len(s) - 1
        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1


"""
    2nd approach: recursion

    Time  O(n)
    Space O(n)
    188 ms, faster than 86.90%
"""


class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        if len(s) < 2:
            return s
        temp = self.helper(s, 0, len(s)-1)
        for i in range(len(s)):
            s[i] = temp[i]

    def helper(self, s, i, j):
        if i > j:
            return ""
        elif i == j:
            return s[i]
        return s[j] + self.helper(s, i+1, j-1) + s[i]
