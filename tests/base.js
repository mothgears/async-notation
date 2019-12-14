const asyncNotation = process.env.NODE_ENV === 'development' ? require('../src/index.mjs').default : require('../async-notation.lib.js');

const timeoutFunction = (time, name, cb)=>{
	setTimeout(()=>cb(name, 'done'), time);
};

class TimeoutClass {
	timeoutMethod (time, name, cb) {
		setTimeout(()=>cb(name, 'done'), time);
	}
}
const timeoutObject = new TimeoutClass();

it('Function', async () => {
	const r = await asyncNotation(timeoutFunction, 100, 'test func');
	expect(r).toEqual(['test func', 'done']);
});

it('Method array-style', async () => {
	const r = await asyncNotation([timeoutObject, 'timeoutMethod'], 100, 'test array');
	expect(r).toEqual(['test array', 'done']);
});

it('Method object-style', async () => {
	const r = await asyncNotation({timeoutMethod : timeoutObject}, 100, 'test object');
	expect(r).toEqual(['test object', 'done']);
});