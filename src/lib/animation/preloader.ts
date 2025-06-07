/**
 * Asset Preloading System for Three.js
 * Provides utilities for preloading textures and models with visual feedback
 */

import * as THREE from 'three';
import gsap from 'gsap';

export class AssetPreloader {
  private textureLoader: THREE.TextureLoader;
  private loadingManager: THREE.LoadingManager;
  private loadedItems: number = 0;
  private totalItems: number = 0;
  private onProgressCallback: ((progress: number) => void) | null = null;
  private onCompleteCallback: (() => void) | null = null;
  
  constructor() {
    this.loadingManager = new THREE.LoadingManager();
    this.textureLoader = new THREE.TextureLoader(this.loadingManager);
    
    this.loadingManager.onProgress = (url, loaded, total) => {
      this.loadedItems = loaded;
      this.totalItems = total;
      const progress = Math.min(loaded / total, 1);
      
      if (this.onProgressCallback) {
        this.onProgressCallback(progress);
      }
    };
    
    this.loadingManager.onLoad = () => {
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
    };
  }
  
  /**
   * Load multiple textures at once
   */
  loadTextures(urls: string[]): Promise<THREE.Texture[]> {
    return Promise.all(urls.map(url => this.loadTexture(url)));
  }
  
  /**
   * Load a single texture
   */
  loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        texture => resolve(texture),
        undefined,
        error => reject(error)
      );
    });
  }
  
  /**
   * Set a callback for tracking loading progress
   */
  onProgress(callback: (progress: number) => void): void {
    this.onProgressCallback = callback;
  }
  
  /**
   * Set a callback for when all assets are loaded
   */
  onComplete(callback: () => void): void {
    this.onCompleteCallback = callback;
  }
  
  /**
   * Create a visual loading screen overlay
   */
  createLoadingScreen(container: HTMLElement): void {
    const overlay = document.createElement('div');
    overlay.className = 'preloader-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #090909;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;
    
    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'preloader-logo';
    logoContainer.innerHTML = `
      <svg width="120" height="120" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" stroke-width="2" stroke="rgba(255,255,255,0.1)" fill="none" />
        <circle cx="25" cy="25" r="23" stroke-width="3" stroke="#4a9fff" stroke-dasharray="144" stroke-dashoffset="144" class="preloader-circle" fill="none" />
      </svg>
    `;
    
    // Create progress text
    const progressText = document.createElement('div');
    progressText.className = 'preloader-text';
    progressText.style.cssText = `
      font-family: sans-serif;
      color: white;
      font-size: 14px;
      margin-top: 20px;
      letter-spacing: 1px;
    `;
    progressText.textContent = 'Loading...';
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'preloader-bar';
    progressBar.style.cssText = `
      width: 200px;
      height: 4px;
      background-color: rgba(255,255,255,0.1);
      border-radius: 2px;
      overflow: hidden;
      margin-top: 15px;
    `;
    
    const progressFill = document.createElement('div');
    progressFill.className = 'preloader-fill';
    progressFill.style.cssText = `
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #4a9fff, #a855f7);
      border-radius: 2px;
      transition: width 0.2s ease-out;
    `;
    
    // Add animation to circle
    const style = document.createElement('style');
    style.textContent = `
      @keyframes preloader-circle-animation {
        0% { stroke-dashoffset: 144; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -144; }
      }
      .preloader-circle {
        animation: preloader-circle-animation 2s linear infinite;
      }
    `;
    
    progressBar.appendChild(progressFill);
    overlay.appendChild(logoContainer);
    overlay.appendChild(progressText);
    overlay.appendChild(progressBar);
    document.head.appendChild(style);
    container.appendChild(overlay);
    
    this.onProgress(progress => {
      progressFill.style.width = `${progress * 100}%`;
      progressText.textContent = `Loading... ${Math.round(progress * 100)}%`;
    });
    
    this.onComplete(() => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => {
          overlay.remove();
          style.remove();
        }
      });
    });
  }
}
