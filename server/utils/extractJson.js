const extractJson = async (text) => {
    if (!text) return null
    
    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const firstBrace = cleaned.indexOf('{')
    const lastBrace = cleaned.lastIndexOf('}')
    if (firstBrace === -1 || lastBrace === -1) return null
    
    const jsonString = cleaned.slice(firstBrace, lastBrace + 1)
    
    try {
        return JSON.parse(jsonString)
    } catch (e) {
        try {
            const messageMatch = jsonString.match(/"message"\s*:\s*"([^"]*)"/)
            const codeMatch = jsonString.match(/"code"\s*:\s*"([\s\S]*)"/)
            if (messageMatch && codeMatch) {
                return {
                    message: messageMatch[1],
                    code: codeMatch[1]
                }
            }
        } catch {
            return null
        }
        return null
    }
}
export default extractJson