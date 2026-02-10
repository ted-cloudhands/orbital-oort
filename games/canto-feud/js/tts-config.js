/**
 * TTS Configuration
 * 
 * To use High-Quality Neural TTS (e.g. Google Cloud):
 * 1. Set `USE_CLOUD_TTS` to true.
 * 2. Provide a valid `API_KEY`.
 * 3. Ensure your backend or proxy handles the request if CORS is an issue.
 */

export const TTS_CONFIG = {
    useCloudTts: false, // Set to true to enable Cloud Neural TTS
    provider: 'google', // 'google' | 'elevenlabs'
    apiKey: '', // Your API Key

    // Google Cloud TTS Settings
    google: {
        voice: 'zh-HK-Wavenet-A', // Options: zh-HK-Standard-A, zh-HK-Wavenet-A, zh-HK-Neural2-A
        languageCode: 'zh-HK'
    },

    // ElevenLabs Settings
    elevenlabs: {
        voiceId: '', // You'll need a Cantonese-capable voice ID
        modelId: 'eleven_multilingual_v2'
    }
};
