// saniyenin yarısı kadar beklet o sırada 500 ms kişinin klavye hızına göre ara function tetikle

const debounce = (fn: Function, ms = 300) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};

export default debounce;
