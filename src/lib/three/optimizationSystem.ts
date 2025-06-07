/**
 * Advanced Three.js Optimization System
 * Builds on existing utilities to provide enhanced performance
 */

import * as THREE from 'three';
import { getGPUTier, PerformanceMonitor } from './threeUtils';

export class OptimizationSystem {
  private camera: THREE.Camera;
  private scene: THREE.Scene;
  private frustum: THREE.Frustum;
  private frustumMatrix: THREE.Matrix4;
  private performanceMonitor: PerformanceMonitor;
  private adaptiveQuality: boolean = true;
  private currentQuality: 'high' | 'medium' | 'low';
  
  constructor(camera: THREE.Camera, scene: THREE.Scene) {
    this.camera = camera;
    this.scene = scene;
    this.frustum = new THREE.Frustum();
    this.frustumMatrix = new THREE.Matrix4();
    this.performanceMonitor = new PerformanceMonitor(60);
    this.currentQuality = getGPUTier();
    
    this.performanceMonitor.start();
  }
  
  /**
   * Update the view frustum for visibility culling
   */
  updateFrustum() {
    this.frustumMatrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse
    );
    this.frustum.setFromProjectionMatrix(this.frustumMatrix);
  }
  
  /**
   * Check if an object is in the camera's view
   */
  isInView(object: THREE.Object3D, extraMargin: number = 0): boolean {
    if (!(object as THREE.Mesh).geometry) return true;
    
    const mesh = object as THREE.Mesh;
    
    if (!mesh.geometry.boundingSphere) {
      mesh.geometry.computeBoundingSphere();
    }
    
    const boundingSphere = mesh.geometry.boundingSphere;
    if (!boundingSphere) return true;
    
    // Create a world position vector for the bounding sphere
    const position = new THREE.Vector3();
    position.copy(boundingSphere.center);
    object.updateMatrixWorld();
    position.applyMatrix4(object.matrixWorld);
    
    // Adjust radius by object scale and extra margin
    const scale = new THREE.Vector3();
    object.getWorldScale(scale);
    const maxScale = Math.max(scale.x, scale.y, scale.z);
    const radius = boundingSphere.radius * maxScale + extraMargin;
    
    return this.frustum.containsPoint(position) || 
           this.frustum.intersectsSphere(new THREE.Sphere(position, radius));
  }
  
  /**
   * Update LOD (Level of Detail) for objects with multiple detail levels
   */
  updateLODLevels() {
    this.scene.traverse(object => {
      if ((object as any).userData && (object as any).userData.lod) {
        const lodData = (object as any).userData.lod;
        const distance = this.camera.position.distanceTo(object.position);
        
        // Set visibility based on distance
        for (let i = 0; i < lodData.levels.length; i++) {
          const level = lodData.levels[i];
          const isLastLevel = i === lodData.levels.length - 1;
          const isWithinRange = distance >= level.minDistance && 
                               (isLastLevel || distance < lodData.levels[i+1].minDistance);
          
          level.object.visible = isWithinRange;
        }
      }
    });
  }
  
  /**
   * Hide objects that are not in the camera's view
   */
  updateObjectsVisibility() {
    this.updateFrustum();
    
    this.scene.traverse(object => {
      if (object.type === 'Mesh' && !(object as any).userData.alwaysRender) {
        const mesh = object as THREE.Mesh;
        
        if (this.isInView(mesh)) {
          if (!mesh.visible) mesh.visible = true;
        } else {
          if (mesh.visible) mesh.visible = false;
        }
      }
    });
  }
  
  /**
   * Monitor performance and adjust quality settings dynamically
   */
  monitorPerformance() {
    this.performanceMonitor.update();
    
    if (this.adaptiveQuality) {
      const framerate = this.performanceMonitor.getFramerate();
      const isLowPerformance = this.performanceMonitor.isLowPerformance();
      
      // Adjust quality based on performance
      if (isLowPerformance && this.currentQuality !== 'low') {
        this.currentQuality = 'low';
        this.applyQualitySettings('low');
      } else if (!isLowPerformance && framerate > 55 && this.currentQuality === 'medium') {
        this.currentQuality = 'high';
        this.applyQualitySettings('high');
      } else if (!isLowPerformance && framerate < 40 && this.currentQuality === 'high') {
        this.currentQuality = 'medium';
        this.applyQualitySettings('medium');
      }
    }
  }
  
  /**
   * Apply quality settings to objects based on performance tier
   */
  applyQualitySettings(quality: 'high' | 'medium' | 'low') {
    this.scene.traverse(object => {
      if ((object as any).userData && (object as any).userData.qualityAdjustable) {
        const qualityData = (object as any).userData.qualityAdjustable;
        
        // Apply quality-specific settings
        if (qualityData[quality]) {
          const settings = qualityData[quality];
          
          Object.keys(settings).forEach(key => {
            if (key.includes('.')) {
              // For nested properties like material.wireframe
              const parts = key.split('.');
              let target = object as any;
              
              for (let i = 0; i < parts.length - 1; i++) {
                if (target[parts[i]]) {
                  target = target[parts[i]];
                }
              }
              
              if (target && parts.length > 0) {
                target[parts[parts.length - 1]] = settings[key];
              }
            } else if (object[key as keyof THREE.Object3D] !== undefined) {
              // For direct properties
              (object as any)[key] = settings[key];
            }
          });
        }
      }
    });
  }
  
  /**
   * Main update method to call each frame
   */
  update() {
    this.updateObjectsVisibility();
    this.updateLODLevels();
    this.monitorPerformance();
  }
  
  /**
   * Enable or disable adaptive quality
   */
  setAdaptiveQuality(enabled: boolean) {
    this.adaptiveQuality = enabled;
  }
  
  /**
   * Manually set quality level
   */
  setQualityLevel(quality: 'high' | 'medium' | 'low') {
    this.currentQuality = quality;
    this.applyQualitySettings(quality);
  }
}
