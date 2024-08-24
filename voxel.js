import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const voxelSize = 1;
const geomtry = new THREE.BoxGeometry(voxelSize, voxelSize, voxelSize);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 25; y++) {
        for (let z = 0; z < 25; z++) {
            const voxel = new THREE.Mesh(geomtry, material);
            voxel.position.set(x * voxelSize, y * voxelSize, z * voxelSize);
            scene.add(voxel);
        }
    }
}

camera.position.set(30, 30, 60);
camera.lookAt(scene.position);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize(window.innerWidth, window.innerHeight);
});