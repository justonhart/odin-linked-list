import Node from "./Node";
export default class LinkedList {
	private firstNode: Node = null;

	/**
	 * Adds a new node containing {value} to the end of the list
	 */
	append(value: any): void {

	}

	/**
	 * Adds a new node containing {value} to the start of the list
	 */
	prepend(value: any): void {

	}

	/**
	 * Returns the total number of nodes in the list
	 */
	size(): number {
		let lastNode = this.firstNode;
		let count = 0;
		if(lastNode === null) {
			return count;
		}

		while(lastNode.nextNode !== null) {
			lastNode = lastNode.nextNode;
			count++;
		}

		return count;
	}

	/**
	 * Returns the first node in the list
	 */
	head(): Node {
		return this.firstNode;
	}

	/**
	 * Returns the last node in the list
	 */
	tail() {
		let lastNode = this.firstNode;
		if(lastNode === null) {
			return null;
		}

		while(lastNode.nextNode !== null) {
			lastNode = lastNode.nextNode;
		}

		return lastNode;
	}

	/**
	 * Returns the node at the given index
	 */
	at(index: number): Node {

	}

	/**
	 * Removes the last element from the list
	 */
	pop(): void {
		if(this.firstNode === null) {
			return;
		}

		if(this.firstNode.nextNode === null){
			delete this.firstNode;
			return;
		}

		let penultimateNode = this.firstNode;
		while(penultimateNode.nextNode.nextNode !== null) {
			penultimateNode = penultimateNode.nextNode;
		}

		delete penultimateNode.nextNode;
	}

	/**
	 * Returns true if the passed-in value is in the list, otherwise false
	 */
	contains(value: any): boolean {
		let currentNode = this.firstNode;
		while(currentNode !== null){
			if(currentNode.value === value) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Returns the index of the node containing the provided value, otherwise null
	 */
	find(value: any): number{
		let currentIndex = 0;
		let currentNode = this.firstNode;
		while(currentNode !== null){
			if(currentNode.value === value) {
				return currentIndex;
			}
			currentIndex++;
		}
		return null;
	}

	/**
	 * Returns a string representation of the linked list
	 */
	toString(): string {

	}

	/** 
	 * Inserts a new node with the given value at the given index
	 */
	insertAt(value: any, index: number): void {

	}

	/**
	 * Removes the node at the given index
	 */
	removeAt(index: number): void {

	}
}
