export default {
	/**
	 *  set to false because it breaks DI in Angular and Nestjs:
	 *  `'readonly' type modifier is only permitted on array and tuple literal types. ts(1354)`
	 */
	checkParameterProperties: false,
};
