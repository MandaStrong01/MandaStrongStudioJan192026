import { supabase } from './supabase';

export interface Asset {
  id: string;
  file_name: string;
  file_url: string;
  asset_type: string;
}

export async function uploadFile(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('media')
    .upload(filePath, file);

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage
    .from('media')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export async function getAssets(): Promise<Asset[]> {
  return [];
}

export async function deleteAsset(assetId: string): Promise<void> {
  return Promise.resolve();
}
