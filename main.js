// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Load the 3D model
const loader = new THREE.FBXLoader();
loader.load('https://raw.githubusercontent.com/justtai/3dmodel/b811997f7ac50fc4a98d26ba066893495ec6e840/tru%20headd.fbx', function(object) {
    scene.add(object);
    object.position.set(0, 0, 0);  // Set the model's position if necessary
    object.scale.set(0.01, 0.01, 0.01);  // Set the model's scale if necessary
    animate();
}, undefined, function(error) {
    console.error(error);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Call animate once to start the loop
animate();
