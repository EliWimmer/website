import type { Action } from 'svelte/action';

export const highlightCode: Action<HTMLElement, {language: "JSON", code: string}> = (node, data) => {
	const highlight = () => {

		
		if (data.language === "JSON") {
			let highlightedCode = highlightJSON(data.code);
			node.innerHTML = highlightedCode;
		}
		// Additional language implementations would go here
	};
	
	// Initial highlighting
	highlight();
};

/**
 * Basic JSON syntax highlighter
 * Highlights strings, numbers, booleans, null, and keys
 */
function highlightJSON(code: string): string {
	// If the JSON string is too large, only apply minimal formatting to prevent browser freezing
	if (code.length > 100000) {
		return `<pre>${escapeHTML(code)}</pre>`;
	}
	
	// Escape HTML special characters
	function escapeHTML(str: string): string {
		return str.replace(/[&<>"']/g, (match) => {
			switch (match) {
				case '&': return '&amp;';
				case '<': return '&lt;';
				case '>': return '&gt;';
				case '"': return '&quot;';
				case "'": return '&#39;';
				default: return match;
			}
		});
	}
	
	// More efficient tokenization approach
	const tokenTypes = {
		PUNCTUATION: 'color: #91A195;',
		KEY: 'color: #798C3B',
		STRING: 'color: #499784;',
		NUMBER: 'color: #b5cea8;',
		KEYWORD: 'color: #569cd6;',
		CURLY_BRACKET: 'color: #9F733C;',
		SQUARE_BRACKET: 'color: #4F9268;',
		COLON_COMMA: 'color: #91A195;'
	};
	
	let result = '';
	let inString = false;
	let currentToken = '';
	let isPotentialKey = false;
	
	// Process character by character
	for (let i = 0; i < code.length; i++) {
		const char = code[i];
		
		// Handle string literals
		if (char === '"') {
			if (i > 0 && code[i-1] === '\\') {
				// Escaped quote
				currentToken += char;
			} else {
				// Start or end of string
				if (inString) {
					// End of string - check if it's a key
					const isKey = isPotentialKey && i < code.length - 1 && code.substring(i+1).trim().startsWith(':');
					
					// Add opening quote with punctuation color
					result += `<span style="${tokenTypes.PUNCTUATION}">"</span>`;
					
					// Add content with appropriate color (key or string)
					if (isKey) {
						result += `<span style="${tokenTypes.KEY}">${escapeHTML(currentToken)}</span>`;
					} else {
						result += `<span style="${tokenTypes.STRING}">${escapeHTML(currentToken)}</span>`;
					}
					
					// Add closing quote with punctuation color
					result += `<span style="${tokenTypes.PUNCTUATION}">"</span>`;
					
					// Reset state
					currentToken = '';
					inString = false;
					isPotentialKey = false;
				} else {
					// Start of string
					if (currentToken) {
						result += escapeHTML(currentToken);
						currentToken = '';
					}
					// Don't add the quote yet - wait until we know if it's a key or string
					inString = true;
					isPotentialKey = true;
					continue;
				}
			}
			continue;
		}
		
		if (inString) {
			currentToken += char;
			continue;
		}
		
		// Handle different types of brackets and punctuation
		if (/[{}\[\]:,]/.test(char)) {
			if (currentToken) {
				// Check if the currentToken is a keyword or number
				if (/^(true|false|null)$/.test(currentToken)) {
					result += `<span style="${tokenTypes.KEYWORD}">${escapeHTML(currentToken)}</span>`;
				} else if (/^-?(?:\d+(?:\.\d+)?|0x[\da-f]+)$/i.test(currentToken)) {
					result += `<span style="${tokenTypes.NUMBER}">${escapeHTML(currentToken)}</span>`;
				} else {
					result += escapeHTML(currentToken);
				}
				currentToken = '';
			}
			
			// Apply different styles based on the type of bracket or punctuation
			if (char === '{' || char === '}') {
				result += `<span style="${tokenTypes.CURLY_BRACKET}">${char}</span>`;
			} else if (char === '[' || char === ']') {
				result += `<span style="${tokenTypes.SQUARE_BRACKET}">${char}</span>`;
			} else {
				result += `<span style="${tokenTypes.COLON_COMMA}">${char}</span>`;
			}
			continue;
		}
		
		// Handle whitespace
		if (/\s/.test(char)) {
			if (currentToken) {
				// Check if the currentToken is a keyword or number
				if (/^(true|false|null)$/.test(currentToken)) {
					result += `<span style="${tokenTypes.KEYWORD}">${escapeHTML(currentToken)}</span>`;
				} else if (/^-?(?:\d+(?:\.\d+)?|0x[\da-f]+)$/i.test(currentToken)) {
					result += `<span style="${tokenTypes.NUMBER}">${escapeHTML(currentToken)}</span>`;
				} else {
					result += escapeHTML(currentToken);
				}
				currentToken = '';
			}
			result += char;
			continue;
		}
		
		// Accumulate other characters
		currentToken += char;
	}
	
	// Handle any remaining token
	if (currentToken) {
		if (/^(true|false|null)$/.test(currentToken)) {
			result += `<span style="${tokenTypes.KEYWORD}">${escapeHTML(currentToken)}</span>`;
		} else if (/^-?(?:\d+(?:\.\d+)?|0x[\da-f]+)$/i.test(currentToken)) {
			result += `<span style="${tokenTypes.NUMBER}">${escapeHTML(currentToken)}</span>`;
		} else {
			result += escapeHTML(currentToken);
		}
	}
	
	return result;
}

