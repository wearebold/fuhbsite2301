import * as THREE from 'three';
import { gsap } from 'gsap';

// Define a utility function for mapping values
function map(value, in_min, in_max, out_min, out_max) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

class NormanWindowGeometry extends THREE.BufferGeometry {
  constructor(width, height, semicircleDiameter, widthSegments = 32, heightSegments = 32) {
    super();

    const vertices = [];
    const indices = [];

    // Create the rectangle part of the window
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    for (let y = 0; y <= heightSegments; y++) {
      for (let x = 0; x <= widthSegments; x++) {
        const u = x / widthSegments;
        const v = y / heightSegments;

        const xPos = lerp(-halfWidth, halfWidth, u);
        const yPos = lerp(-halfHeight, halfHeight, v);

        vertices.push(xPos, yPos, 0);
      }
    }

    // Create the semicircle part of the window
    const radius = semicircleDiameter / 2;
    const centerX = 0;
    const centerY = halfHeight + radius;
    const numSemicircleSegments = 64; // You can adjust this for smoother or coarser curvature

    for (let i = 0; i <= numSemicircleSegments; i++) {
      const angle = (i / numSemicircleSegments) * Math.PI;
      const xPos = centerX + Math.sin(angle) * radius;
      const yPos = centerY + Math.cos(angle) * radius;
      vertices.push(xPos, yPos, 0);
    }

    // Define the indices to create triangles
    for (let y = 0; y < heightSegments; y++) {
      for (let x = 0; x < widthSegments; x++) {
        const base = x + y * (widthSegments + 1);
        const topLeft = base;
        const topRight = base + 1;
        const bottomLeft = base + widthSegments + 1;
        const bottomRight = base + widthSegments + 2;

        indices.push(topLeft, topRight, bottomLeft);
        indices.push(topRight, bottomRight, bottomLeft);
      }
    }

    this.setIndex(indices);
    this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
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
      uWindowWidth: {
        value: 1,
      },
      uWindowHeight: {
        value: 2,
      },
      uSemicircleDiameter: {
        value: 1,        
      }
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
      uniform float uWindowWidth; // Width of the rectangle
      uniform float uWindowHeight; // Height of the rectangle
      uniform float uSemicircleDiameter; // Diameter of the semicircle

      varying vec2 vUv;

      void main() {
        vec3 color = texture2D(uTexture, vUv).rgb;

        float centerX = 0.5;
        float centerY = uWindowHeight / (2.0 * uSemicircleDiameter);

        // Calculate the distance from the current pixel to the center
        float dx = abs(vUv.x - centerX);
        float dy = abs(vUv.y - centerY);
        float dist = sqrt(dx * dx + dy * dy);

        // Check if the pixel is inside the Norman window shape
        if (
          vUv.x >= centerX - uWindowWidth / 2.0 &&
          vUv.x <= centerX + uWindowWidth / 2.0 &&
          vUv.y >= 0.0 &&
          vUv.y <= uWindowHeight
        ) {
          gl_FragColor = vec4(color, uAlpha);
        } else if (dist <= uSemicircleDiameter / 2.0) {
          gl_FragColor = vec4(color, uAlpha);
        } else {
          discard;
        }
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
