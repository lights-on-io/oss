export default {
	allows: [
		/**
		 *  the no-parameter-properties rule would break DI e.g. in Angular and Nestjs.
		 *  typically injected instances should be `private readonly` and therefore this is the allowed option.
		 *  if there really is the need of exposing e.g. an injected service (or method) an accessor should be used.
		 */
		'private readonly',
	],
};
