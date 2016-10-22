export const compose = (...args) => data => args.reduceRight((a, n) => n(a), data);

const truth = d => !!d;

export const match = (...patterns) => data => {
	for (let i = 0; i < patterns.length; i++) {
		if (truth(patterns[i][0](data))) {
			return typeof patterns[i][1] === 'function' ? patterns[i][1](data) : patterns[i][1];	
		}	
	}
	
	return null;
}

export const $ = {
	any: p => p,
	noProp: prop => p => !(prop in p) || p[prop] == null,
	empty: p => Array.isArray(p) 
			? !p.length
			: (typeof p === 'object')
				? !Object.keys(p).length 
				: false
}