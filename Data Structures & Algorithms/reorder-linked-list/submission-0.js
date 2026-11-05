/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        let slow = head;
        let fast = head;

        while(fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

        }


        let prev = null;
        let cur = slow.next;
        slow.next = null;
        while(cur !== null) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }


        let first = head;
        let second = prev;

        while (second !== null){
            let t1 = first.next;
            let t2 = second.next;

            first.next = second;
            second.next = t1;

            first = t1;
            second = t2;
        }
    }
}
