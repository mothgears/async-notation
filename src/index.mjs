export default async (target, ...props) => {
	return new Promise((resolve, reject)=>{
		const cb = (...result) => resolve(result);
		try {
			props = [...props, cb];
			if (Array.isArray(target)) target[0][target[1]](...props);
			else if (typeof target === 'function') target(...props);
			else {
				let [methodName, object] = Object.entries(target)[0];
				object[methodName](...props);
			}
		} catch (err) {
			reject(err);
		}
	})
};