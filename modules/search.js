const PAGES = require("../assets/SearchData/search.json");

/**
 * Count occurrences of a keyword or phrase in text
 * @param {string} text - The text to search in
 * @param {string} keyword - The keyword or phrase to search for
 * @returns {number} - The number of matches
 */
function countMatches(text, keyword, partial = true) {
   if (!keyword) return 0;

   const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

   // Full phrase or whole word
   const pattern = keyword.includes(" ") ? escaped : `\\b${escaped}\\b`;
   const fullRegex = new RegExp(pattern, "gi");

   // Partial match regex (just the escaped string)
   const partialRegex = new RegExp(escaped, "gi");

   const fullMatches = text.match(fullRegex) || [];
   const partialMatches = partial ? text.match(partialRegex) || [] : [];

   // Remove overlapping counts (so partials don’t double count fulls)
   const partialOnly = partialMatches.length - fullMatches.length;

   return fullMatches.length + Math.max(0, partialOnly);
}


/**
 * Search function that ranks pages based on keyword and phrase matches
 * @param {string} query - The search query
 * @returns {Array} - Ranked list of pages with normalized scores
 */
export default function search(query) {
   if (!query.trim()) return [];

   const keywords = query.trim().split(/\s+/); // Individual words
   const phrase = query.trim(); // Full phrase

   return PAGES.map((page) => {
      let rawScore = 0;

      rawScore += countMatches(page.title, phrase) * 5;
      rawScore += countMatches(page.url, phrase) * 3;
      rawScore += countMatches(page.content, phrase) * 3;

      keywords.forEach((word) => {
         rawScore += countMatches(page.title, word) * 2;
         rawScore += countMatches(page.url, word);
         rawScore += countMatches(page.content, word);
      });

      const totalWords = page.content.split(/\s+/).length;
      const normalizedScore = totalWords > 0 ? rawScore / totalWords : 0;

      return { ...page, score: normalizedScore };
   })
      .filter(page => page.score > 0)
      .sort((a, b) => b.score - a.score);
}

