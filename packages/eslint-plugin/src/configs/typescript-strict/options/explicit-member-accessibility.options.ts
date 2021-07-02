export default {
	accessibility: 'explicit',
	ignoredMethodNames: [
		// angular life cycle
		'ngOnChanges',
		'ngOnInit',
		'ngDoCheck',
		'ngAfterContentInit',
		'ngAfterContentChecked',
		'ngAfterViewInit',
		'ngAfterViewChecked',
		'ngOnDestroy',
	],
	overrides: {
		accessors: 'explicit',
		constructors: 'no-public',
		methods: 'explicit',
		properties: 'explicit',
		parameterProperties: 'explicit',
	},
};
