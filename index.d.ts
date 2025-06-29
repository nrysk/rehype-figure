import type { Plugin } from "unified";

export interface Options {
	className?: string;
}

declare const rehypeFigure: Plugin<[Options?]>;

export default rehypeFigure;
