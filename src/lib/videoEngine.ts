export interface VideoProject {
  id: string;
  title: string;
  clips: VideoClip[];
  textOverlays: TextOverlay[];
  audioTracks: AudioTrack[];
}

export interface VideoClip {
  id: string;
  url: string;
  startTime: number;
  duration: number;
  track: number;
}

export interface TextOverlay {
  id: string;
  text: string;
  startTime: number;
  duration: number;
  style: TextStyle;
}

export interface TextStyle {
  fontSize: number;
  color: string;
  fontFamily: string;
  position: { x: number; y: number };
}

export interface AudioTrack {
  id: string;
  url: string;
  startTime: number;
  duration: number;
  volume: number;
}

export function createVideoProject(title: string): VideoProject {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title,
    clips: [],
    textOverlays: [],
    audioTracks: [],
  };
}

export function addVideoClip(project: VideoProject, clip: VideoClip): VideoProject {
  return {
    ...project,
    clips: [...project.clips, clip],
  };
}

export function addTextOverlay(project: VideoProject, overlay: TextOverlay): VideoProject {
  return {
    ...project,
    textOverlays: [...project.textOverlays, overlay],
  };
}

export function addAudioTrack(project: VideoProject, audio: AudioTrack): VideoProject {
  return {
    ...project,
    audioTracks: [...project.audioTracks, audio],
  };
}
