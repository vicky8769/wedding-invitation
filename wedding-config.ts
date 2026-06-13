import weddingConfig from '../config/wedding-config.json';

export type WeddingConfig = typeof weddingConfig;

export const config = weddingConfig as WeddingConfig;
