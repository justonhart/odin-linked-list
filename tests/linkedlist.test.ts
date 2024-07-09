import LinkedList from '../src/LinkedList';

let list: LinkedList;

beforeEach(() => {
	list = new LinkedList();
});

test('append sets head in new list', () => {
	list.append(1);
	expect(list.head()?.value).toBe(1);
});

test('prepend sets head in new list', () => {
	list.prepend(1);
	expect(list.head()?.value).toBe(1);
});

test('tail is head in list with single item', () => {
	list.append(1);
	expect(list.tail()?.value).toBe(1);
});

test('size returns number of nodes in list', () => {
	expect(list.size()).toBe(0);
	list.append(1);
	expect(list.size()).toBe(1);
	list.append(10);
	expect(list.size()).toBe(2);
});

test('at returns the node at given index', () => {
	expect(list.at(0)).toBeNull();
	list.append(1);
	expect(list.at(0)?.value).toBe(1);
});

test('pop removes the last existing node', () => {
	list.pop();
	expect(list.size()).toBe(0);

	list.append(1);
	list.pop();
	expect(list.size()).toBe(0);
});

test('contains works as expected', () => {
	expect(list.contains(11)).toBe(false);
	list.append(1);
	expect(list.contains(11)).toBe(false);
	list.append(11);
	expect(list.contains(11)).toBe(true);
});

test('find works as expected', () => {
	expect(list.find(11)).toBeNull();
	list.append(1);
	expect(list.find(11)).toBeNull();
	list.append(11);
	expect(list.find(11)).toBe(1);
});

test('toString prints values in order, ending with null', () => {
	expect(list.toString()).toEqual('null');
	for(let i = 1; i < 6; i++) {
		list.append(i);
	}
	expect(list.toString()).toEqual('[1] -> [2] -> [3] -> [4] -> [5] -> null');

	list = new LinkedList();
	for(let i = 1; i < 6; i++) {
		list.prepend(i);
	}
	expect(list.toString()).toEqual('[5] -> [4] -> [3] -> [2] -> [1] -> null');
});
