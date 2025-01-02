import * as THREE from 'three'

// Canvas
const canvas:HTMLCanvasElement|null = document.querySelector<HTMLCanvasElement>('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1,100);
const camera = new THREE.OrthographicCamera(-1,1, 1,-1, 0.1,100);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas as HTMLCanvasElement
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// Time // --> used to calculate delta using Js's builtin date object
// let time = Date.now();

// Calculating Delta using ThreeJS's Clock object

const clock = new THREE.Clock();


// Animations
const tick = () =>{
    //update objects
    //mesh.position.x -= 0.01;
    //mesh.position.y += 0.01;


    // Calculating Delta using Built in JS date object
    // Time
    // const currentTime = Date.now();

    // Delta -- difference between current time and previous time
    // const deltaTime = currentTime - time;
    // time = currentTime;
    // console.log(deltaTime);

    // ThreeJs Clock to get the Elapsed time

    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime);
    //update objects
    // using date
    //mesh.rotation.y += 0.002 * deltaTime;

    // using three.clock

    mesh.rotation.y = elapsedTime * Math.PI * 2;
    mesh.position.y = Math.sin(elapsedTime);
    camera.lookAt(mesh.position);
    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick();