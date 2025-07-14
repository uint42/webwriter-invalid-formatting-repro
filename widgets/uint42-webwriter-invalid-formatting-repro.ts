import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("uint42-webwriter-invalid-formatting-repro")
export class Uint42WebWriterInvalidFormattingRepro extends LitElementWw {
	static scopedElements = {};
	static styles = css``;

	// The formatter will insert a line break between the greater than and less than characters,
	// producing invalid JavaScript code
	problematicString = "><";

	render() {
		return html`Hello world`;
	}
}
