import * as THREE from 'three';
import { gsap } from 'gsap';

// Define a utility function for mapping values
function map(value, in_min, in_max, out_min, out_max) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

class ArcTopPlaneGeometry extends THREE.BufferGeometry {
    constructor(width, height, arcRadius, segments) {
      super();
  
      // Define the number of vertices for the plane
      const planeVertices = [];
  
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width - width / 2;
        const z = Math.sqrt(Math.pow(arcRadius, 2) - Math.pow(x, 2));
        planeVertices.push(x, 0, z);
      }
  
      // Create vertices for the arc-shaped top
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width - width / 2;
        const y = height;
        const z = Math.sqrt(Math.pow(arcRadius, 2) - Math.pow(x, 2));
        planeVertices.push(x, y, z);
      }
  
      // Create faces connecting the vertices
      const indices = [];
      for (let i = 0; i < segments; i++) {
        const baseIndex = i;
        const nextBaseIndex = (i + 1) % segments;
        const topIndex = i + segments;
        const nextTopIndex = (i + 1) % segments + segments;
  
        // Create two triangles for each segment
        indices.push(baseIndex, topIndex, nextBaseIndex);
        indices.push(nextBaseIndex, topIndex, nextTopIndex);
      }
  
      // Set the vertices and indices
      this.setAttribute('position', new THREE.Float32BufferAttribute(planeVertices, 3));
      this.setIndex(indices);
      this.computeVertexNormals(); // Use computeVertexNormals instead
    }
  }

class EffectShell {
  constructor(container = document.body, itemsWrapper = null) {
    this.container = container;
    this.itemsWrapper = itemsWrapper;
    if (!this.container || !this.itemsWrapper) return;
    this.setup();
    this.initEffectShell().then(() => {
      console.log('Load finished');
      this.isLoaded = true;
      if (this.isMouseOver) this.onMouseOver(this.tempItemIndex);
      this.tempItemIndex = null;
    });
    this.createEventsListeners();
  }

  setup() {
    window.addEventListener('resize', this.onWindowResize.bind(this), false);

    // Renderer
    this.canvas = document.getElementById("anim-img-hover-canvas");
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.canvas });
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(40, this.viewport.aspectRatio, 0.1, 100);
    this.camera.position.set(0, 0, 3);

    // Mouse
    this.mouse = new THREE.Vector2();

    // Time
    this.timeSpeed = 2;
    this.time = 0;
    this.clock = new THREE.Clock();

    // Animation loop
    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
    // Called every frame
    this.time += this.clock.getDelta() * this.timeSpeed;
    this.renderer.render(this.scene, this.camera);
  }

  initEffectShell() {
    let promises = [];

    this.items = this.itemsElements;

    const THREEtextureLoader = new THREE.TextureLoader();
    this.items.forEach((item, index) => {
      // Create textures
      promises.push(this.loadTexture(THREEtextureLoader, item.img ? item.img.src : null, index));
    });

    return new Promise((resolve, reject) => {
      // Resolve textures promises
      Promise.all(promises).then((promises) => {
        // All textures are loaded
        promises.forEach((promise, index) => {
          // Assign texture to item
          this.items[index].texture = promise.texture;
        });
        resolve();
      });
    });
  }

  createEventsListeners() {
    this.items.forEach((item, index) => {
      item.element.addEventListener(
        'mouseover',
        this._onMouseOver.bind(this, index),
        false
      );
    });

    this.container.addEventListener(
      'mousemove',
      this._onMouseMove.bind(this),
      false
    );
    this.itemsWrapper.addEventListener(
      'mouseleave',
      this._onMouseLeave.bind(this),
      false
    );
  }

  _onMouseLeave(event) {
    console.log('Mouse leave');
    this.isMouseOver = false;
    this.onMouseLeave(event);
  }

  _onMouseMove(event) {
    console.log('Mouse move');
    // Get normalized mouse position on viewport
    this.mouse.x = (event.clientX / this.viewport.width) * 2 - 1;
    this.mouse.y = -(event.clientY / this.viewport.height) * 2 + 1;

    console.log(this.mouse.x, this.mouse.y);

    this.onMouseMove(event);
  }

  _onMouseOver(index, event) {
    console.log(`Mouse over item ${index}`);
    this.tempItemIndex = index;
    this.onMouseOver(index, event);
  }

  onWindowResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.viewport.width, this.viewport.height);
  }

  onUpdate() {}

  onMouseEnter(event) {}

  onMouseLeave(event) {}

  onMouseMove(event) {}

  onMouseOver(index, event) {}

  get viewport() {
    let width = this.container.clientWidth;
    let height = this.container.clientHeight;
    let aspectRatio = width / height;
    return {
      width,
      height,
      aspectRatio,
    };
  }

  get viewSize() {
    // Fit plane to screen
    let distance = this.camera.position.z;
    let vFov = (this.camera.fov * Math.PI) / 180;
    let height = 2 * Math.tan(vFov / 2) * distance;
    let width = height * this.viewport.aspectRatio;
    return { width, height, vFov };
  }

  get itemsElements() {
    // Convert NodeList to Array
    const items = [...this.itemsWrapper.querySelectorAll('[data-anim-hover]')];

    // Create an Array of items including element, image, and index
    return items.map((item, index) => ({
      element: item,
      img: item.querySelector('img') || null,
      index: index,
    }));
  }

  loadTexture(loader, url, index) {
    // https://threejs.org/docs/#api/en/loaders/TextureLoader
    return new Promise((resolve, reject) => {
      if (!url) {
        resolve({ texture: null, index });
        return;
      }
      // Load a resource
      loader.load(
        // Resource URL
        url,

        // onLoad callback
        (texture) => {
          resolve({ texture, index });
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        (error) => {
          console.error('An error happened.', error);
          reject(error);
        }
      );
    });
  }
}

class StretchEffect extends EffectShell {
  constructor(container = document.body, itemsWrapper = null, options = {}) {
    super(container, itemsWrapper);
    if (!this.container || !this.itemsWrapper) return;

    options.strength = options.strength || 0.25;
    this.options = options;

    this.init();
  }

  init() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.scale = new THREE.Vector3(1, 1, 1);
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    // this.geometry = new ArcTopPlaneGeometry(1, 2, 2, 32);
    
    this.uniforms = {
      uTexture: {
        value: null,
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0),
      },
      uAlpha: {
        value: 0,
      },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
          uniform vec2 uOffset;
  
          varying vec2 vUv;
  
          vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
            float M_PI = 3.1415926535897932384626433832795;
            position.x = position.x + (sin(uv.y * M_PI) * offset.x);
            position.y = position.y + (sin(uv.x * M_PI) * offset.y);
            return position;
          }
  
          void main() {
            vUv =  uv + (uOffset * 2.);
            vec3 newPosition = position;
            newPosition = deformationCurve(position, uv, uOffset);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
          }
        `,
      fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uAlpha;
  
          varying vec2 vUv;
  
          vec2 scaleUV(vec2 uv, float scale) {
            float center = 0.5;
            return ((uv - center) * scale) + center;
          }
  
          void main() {
            vec3 color = texture2D(uTexture, scaleUV(vUv, 0.8)).rgb;
            gl_FragColor = vec4(color, uAlpha);
          }
        `,
      transparent: true,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  onMouseEnter() {
    console.log('onMouseEnter');
    if (!this.currentItem || !this.isMouseOver) {
      this.isMouseOver = true;
      // Show plane
      gsap.to(this.uniforms.uAlpha, {
        duration: 0.5,
        value: 1,
        ease: 'power4.out',
      });
    }
  }

  onMouseLeave(event) {
    console.log('onMouseLeave');
    gsap.to(this.uniforms.uAlpha, {
      duration: 0.5,
      value: 0,
      ease: 'power4.out',
    });
  }

  onMouseMove(event) {
    console.log('onMouseMove');
    // Project mouse position to world coordinates
    let x = map(this.mouse.x, -1, 1, -this.viewSize.width / 2, this.viewSize.width / 2);
    let y = map(this.mouse.y, -1, 1, -this.viewSize.height / 2, this.viewSize.height / 2);

    console.log(x, y);

    // Update position
    this.position = new THREE.Vector3(x, y, 0);
    gsap.to(this.plane.position, {
      duration: 1,
      x: x,
      y: y,
      ease: 'power4.out',
      onUpdate: this.onPositionUpdate.bind(this),
    });
  }

  onPositionUpdate() {
    // Compute offset
    let offset = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength);
    this.uniforms.uOffset.value = offset;
  }

  onMouseOver(index, e) {
    if (!this.isLoaded) return;
    this.onMouseEnter();
    console.log('onMouseOver', index);
    if (this.currentItem && this.currentItem.index === index) return;
    this.onTargetChange(index);
  }

  onTargetChange(index) {
    // Item target changed
    this.currentItem = this.items[index];
    if (!this.currentItem.texture) return;

    // Compute image ratio
    let imageRatio =
      this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight;
    this.scale = new THREE.Vector3(imageRatio, 1, 1);
    this.uniforms.uTexture.value = this.currentItem.texture;
    this.plane.scale.copy(this.scale);
  }
}

export default defineNuxtPlugin((nuxtApp) => {
 const container = document.querySelector('.anim-img-hover');
  const itemsWrapper = document.querySelector('.anim-img-hover-links');
  console.log(itemsWrapper);
  const effect = new StretchEffect(container, itemsWrapper);
  // Add the cursor instance to the context as $cursor
  inject('effect', effect);
});
