const Table = r => require.ensure([], () => r(require('./table')), 'table');
export default [{
	path: '/table',
	name: 'table',
	component: Table
}];