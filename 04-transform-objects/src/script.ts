import * as THREE from 'three'

// Canvas
const canvas:HTMLCanvasElement|null = document.querySelector<HTMLCanvasElement>('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */

const group  = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0xff0000}));
group.add(cube1);
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0x00ff00}));
group.add(cube2);
cube2.position.x = 2
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0x0000ff}));
group.add(cube3);
cube3.position.y = 2;
group.position.y = 1;
group.scale.y = 1.5;
group.rotation.y = -2.2;

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // position
// // mesh.position.x = 0.7;
// // mesh.position.y = - 0.6;
// // mesh.position.z = 1;

// mesh.position.set(0.7, 0.6, 1);

// // scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;

// // Rotation
// mesh.rotation.y = 3.14;
// mesh.rotation.y = Math.PI;

// scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1;
camera.position.y = 1;
camera.position.set(1,1.7,5);
scene.add(camera)


/**
 *  Axis Helper
 * **/
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);
// camera.lookAt(mesh.position);
/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas as HTMLCanvasElement
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)