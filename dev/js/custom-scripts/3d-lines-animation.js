var mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,

            SEPARATION = 500,
            AMOUNTX = 0.5,
            AMOUNTY = 1,

            camera, scene, renderer;

            init();
            animate();



            function init() {


                /*
                 *   Define variables
                 */
                var container, separation = 3000, amountX = 30, amountY = 20, color = 0xffffff,
                particles, particle;

                container = document.getElementById("canvas");


                camera = new THREE.PerspectiveCamera( 200, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 200;

                scene = new THREE.Scene();

                renderer = new THREE.CanvasRenderer({ alpha: true });
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setClearColor( 0x000000, 0 );   // canvas background color
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );



                var PI2 = Math.PI * 2;
                var material = new THREE.SpriteCanvasMaterial( {

                    color: color,
                    opacity: 0.5,
                    program: function ( context ) {

                        context.beginPath();
                        context.arc( 0, 0, 0.5, 0, PI2, true );
                        context.fill();

                    }

                } );

                var geometry = new THREE.Geometry();

                /*
                 *   Number of particles
                 */
                for ( var i = 0; i < 100; i ++ ) {

                    particle = new THREE.Sprite( material );
                    particle.position.x = Math.random() * 2 - 1;
                    particle.position.y = Math.random() * 2 - 1;
                    particle.position.z = Math.random() * 2 - 1;
                    particle.position.normalize();
                    particle.position.multiplyScalar( Math.random() * 10 + 600 );
                    particle.scale.x = particle.scale.y = 4;

                    scene.add( particle );

                    geometry.vertices.push( particle.position );

                }

                /*
                 *   Lines
                 */

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: color, opacity: 0.1 } ) );
                scene.add( line );

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseMove(event) {

                mouseX = (event.clientX - windowHalfX) * 0.05;
                mouseY = (event.clientY - windowHalfY) * 0.2;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                    mouseX = (event.touches[ 0 ].pageX - windowHalfX) * 0.7;
                    mouseY = (event.touches[ 0 ].pageY - windowHalfY) * 0.7;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * 0.1;
                camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;
                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }


// // var SEPARATION = 50,
// //     AMOUNTX = 40,
// //     AMOUNTY = 20;
// //
// // var container;
// // var camera, scene, renderer;
// //
// // var particles, particle, count = 0;
// //
// // var mouseX = 85,
// //     mouseY = -342;
// //
// // var windowHalfX = window.innerWidth / 2;
// // var windowHalfY = window.innerHeight / 2;
// //
// // init();
// // animate();
// //
// // function init() {
// //
// //     container = document.getElementById("canvas");
// //     //document.body.appendChild(container);
// //
// //     camera = new THREE.PerspectiveCamera(170, window.innerWidth / window.innerHeight, 1, 10000);
// //     camera.position.z = 300;
// //
// //     scene = new THREE.Scene();
// //
// //     particles = new Array();
// //
// //     var PI2 = Math.PI * 2;
// //     var material = new THREE.SpriteCanvasMaterial({
// //
// //         color: 0xe1e1e1,
// //         program: function(context) {
// //
// //             context.beginPath();
// //             context.arc(0, 0, .6, 0, PI2, true);
// //             context.fill();
// //
// //         }
// //
// //     });
// //
// //     var i = 0;
// //
// //     for (var ix = 0; ix < AMOUNTX; ix++) {
// //
// //         for (var iy = 0; iy < AMOUNTY; iy++) {
// //
// //             particle = particles[i++] = new THREE.Particle(material);
// //             particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
// //             particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
// //             scene.add(particle);
// //
// //         }
// //
// //     }
// //
// //     renderer = new THREE.CanvasRenderer();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     container.appendChild(renderer.domElement);
// //
// //     document.addEventListener('mousemove', onDocumentMouseMove, false);
// //     document.addEventListener('touchstart', onDocumentTouchStart, false);
// //     document.addEventListener('touchmove', onDocumentTouchMove, false);
// //
// //     //
// //
// //     window.addEventListener('resize', onWindowResize, false);
// //
// // }
// //
// // function onWindowResize() {
// //
// //     windowHalfX = window.innerWidth / 2;
// //     windowHalfY = window.innerHeight / 2;
// //
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //
// // }
// //
// // //
// //
// // function onDocumentMouseMove(event) {
// //
// //     mouseX = event.clientX - windowHalfX;
// //     mouseY = event.clientY - windowHalfY;
// //
// // }
// //
// // function onDocumentTouchStart(event) {
// //
// //     if (event.touches.length === 1) {
// //
// //         event.preventDefault();
// //
// //         mouseX = event.touches[0].pageX - windowHalfX;
// //         mouseY = event.touches[0].pageY - windowHalfY;
// //
// //     }
// //
// // }
// //
// // function onDocumentTouchMove(event) {
// //
// //     if (event.touches.length === 1) {
// //
// //         event.preventDefault();
// //
// //         mouseX = event.touches[0].pageX - windowHalfX;
// //         mouseY = event.touches[0].pageY - windowHalfY;
// //
// //     }
// //
// // }
// //
// // //
// //
// // function animate() {
// //
// //     requestAnimationFrame(animate);
// //
// //     render();
// //
// //
// // }
// //
// // function render() {
// //
// //     camera.position.x += (mouseX - camera.position.x) * .05;
// //     camera.position.y += (-mouseY - camera.position.y) * .05;
// //     camera.lookAt(scene.position);
// //
// //     var i = 0;
// //
// //     for (var ix = 0; ix < AMOUNTX; ix++) {
// //
// //         for (var iy = 0; iy < AMOUNTY; iy++) {
// //
// //             particle = particles[i++];
// //             particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
// //             particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
// //
// //         }
// //
// //     }
// //
// //     renderer.render(scene, camera);
// //
// //     count += 0.1;
// //
// //}