export interface AITool {
  id: string;
  name: string;
  icon: string;
  category: string;
}

const allTools: AITool[] = [
  { id: '1', name: 'Video Enhancer', icon: '🎬', category: 'Video' },
  { id: '2', name: 'Color Grading', icon: '🎨', category: 'Video' },
  { id: '3', name: 'Audio Mixer', icon: '🎵', category: 'Audio' },
  { id: '4', name: 'Voice Generator', icon: '🎙️', category: 'Audio' },
  { id: '5', name: 'Text Animator', icon: '✍️', category: 'Text' },
  { id: '6', name: 'Subtitle Generator', icon: '📝', category: 'Text' },
  { id: '7', name: 'Image Upscaler', icon: '🖼️', category: 'Image' },
  { id: '8', name: 'Background Remover', icon: '🎭', category: 'Image' },
  { id: '9', name: 'Motion Tracker', icon: '📍', category: 'VFX' },
  { id: '10', name: 'Particle Effects', icon: '✨', category: 'VFX' },
  { id: '11', name: 'Green Screen', icon: '🟢', category: 'VFX' },
  { id: '12', name: 'Face Swap', icon: '👤', category: 'AI' },
  { id: '13', name: 'Scene Generator', icon: '🏞️', category: 'AI' },
  { id: '14', name: 'Music Composer', icon: '🎼', category: 'Audio' },
  { id: '15', name: 'Sound Effects', icon: '🔊', category: 'Audio' },
  { id: '16', name: 'Transition Effects', icon: '🔄', category: 'Video' },
  { id: '17', name: 'Speed Ramping', icon: '⚡', category: 'Video' },
  { id: '18', name: 'Stabilizer', icon: '📹', category: 'Video' },
  { id: '19', name: 'Object Remover', icon: '🗑️', category: 'AI' },
  { id: '20', name: '3D Text Generator', icon: '🔤', category: 'Text' },
];

const toolsPerPage = 120;

export function getToolsForPage(pageNumber: number): AITool[] {
  const tools: AITool[] = [];
  const startIndex = (pageNumber - 4) * toolsPerPage;

  for (let i = 0; i < toolsPerPage; i++) {
    const toolIndex = (startIndex + i) % allTools.length;
    const tool = allTools[toolIndex];
    tools.push({
      ...tool,
      id: `${pageNumber}-${i}`,
      name: `${tool.name} ${startIndex + i + 1}`,
    });
  }

  return tools;
}

export function searchTools(query: string, pageNumber: number): AITool[] {
  const pageTools = getToolsForPage(pageNumber);
  if (!query.trim()) return pageTools;

  const lowerQuery = query.toLowerCase();
  return pageTools.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery)
  );
}
