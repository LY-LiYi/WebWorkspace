// 对dom的操作 判断是否有样式
export function addClass(el,className)
{
	if(hasClass(el,className))
	{
		return 
	}
	
	let newClass=el.className.split('');
	newClass.push(className);
	el.className=newClass.join('');
}

export function hasClass(el,className)
{
	// 创建正则 判断是否有样式
	let reg=new RegExp('(^|\\s)'+className+'(\\s|$)');

	return reg.test(el.className);

}