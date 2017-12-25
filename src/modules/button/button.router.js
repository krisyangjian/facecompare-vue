const Button = r => require.ensure([], () => r(require('./button')), 'button');
export default [{
	path: '/button',
	name: 'button',
	component: Button
}];