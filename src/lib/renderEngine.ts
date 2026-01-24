import { VideoProject } from './videoEngine';

export interface RenderProgress {
  status: 'rendering' | 'completed' | 'failed';
  progress: number;
  message: string;
}

export interface RenderEngine {
  render: (project: VideoProject, onProgress: (progress: RenderProgress) => void) => Promise<string>;
  export: (videoUrl: string, format: string) => Promise<Blob>;
}

export function createRenderEngine(): RenderEngine {
  return {
    render: async (project: VideoProject, onProgress: (progress: RenderProgress) => void): Promise<string> => {
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        onProgress({
          status: 'rendering',
          progress: i,
          message: `Rendering... ${i}%`,
        });
      }

      onProgress({
        status: 'completed',
        progress: 100,
        message: 'Rendering complete!',
      });

      return 'https://example.com/rendered-video.mp4';
    },
    export: async (videoUrl: string, format: string): Promise<Blob> => {
      return new Blob([''], { type: `video/${format}` });
    },
  };
}
