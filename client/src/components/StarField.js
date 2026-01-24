import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000); // More stars
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 800,
          originalZ: Math.random() * 800,
          brightness: Math.random() * 0.9 + 0.1, // Brightness variation
          size: Math.random() * 1.5 + 0.5, // Size variation
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: i % 3 === 0 ? 'white' : i % 3 === 1 ? '#FFFFE0' : '#F0F8FF', // Some stars are slightly yellow/blue
        });
      }
    };

    initStars();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Create ripple effect when mouse moves
      createRippleEffect(e.clientX, e.clientY);
      
      // Create particle trail when mouse moves
      createMouseParticleTrail(e.clientX, e.clientY);
    };
    
    // Particle trail function
    const createMouseParticleTrail = (x, y) => {
      // Create a few particles near the mouse position
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 20;
          const particleX = x + Math.cos(angle) * distance;
          const particleY = y + Math.sin(angle) * distance;
          
          const particle = {
            x: particleX,
            y: particleY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2 + 1,
            alpha: 1,
            life: 30
          };
          
          // Animate the particle
          const animateParticle = () => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.alpha *= 0.95;
            particle.life--;
            
            if (particle.life > 0) {
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 200, ${particle.alpha})`;
              ctx.fill();
              
              requestAnimationFrame(animateParticle);
            }
          };
          
          animateParticle();
        }, i * 50); // Stagger the particles
      }
    };
    
    // Ripple effect function
    const createRippleEffect = (x, y) => {
      if (Math.random() < 0.3) { // Only sometimes to avoid too many ripples
        const ripple = {
          x: x,
          y: y,
          radius: 0,
          maxRadius: 150,
          alpha: 0.3,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${0.3})`
        };
        
        // Animate the ripple
        const animateRipple = () => {
          ripple.radius += 2;
          ripple.alpha -= 0.01;
          
          if (ripple.radius < ripple.maxRadius && ripple.alpha > 0) {
            requestAnimationFrame(animateRipple);
            
            // Draw the ripple
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            const rippleGradient = ctx.createRadialGradient(
              ripple.x, ripple.y, 0,
              ripple.x, ripple.y, ripple.radius
            );
            rippleGradient.addColorStop(0, ripple.color.replace('0.3', ripple.alpha.toString()));
            rippleGradient.addColorStop(1, ripple.color.replace('0.3', '0'));
            ctx.fillStyle = rippleGradient;
            ctx.fill();
          }
        };
        
        animateRipple();
      }
    };

    // Constellation drawing function
    const drawConstellationLines = (ctx, star, index) => {
      const maxConnectionDistance = 120; // Closer connections
      
      starsRef.current.forEach((otherStar, otherIndex) => {
        if (index !== otherIndex) {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxConnectionDistance && distance > 30) { // Minimum distance to avoid clumping
            const alpha = (1 - distance / maxConnectionDistance) * 0.15 * star.brightness; // Use brightness instead of opacity
            
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(200, 200, 255, ${alpha})`; // Light blue color for constellations
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    };
    
    // Shooting star effect
    const createShootingStar = (startIndex) => {
      const star = starsRef.current[startIndex];
      const shootingStars = [];
      
      const trailLength = 8; // Longer trail
      for (let i = 0; i < trailLength; i++) {
        shootingStars.push({
          x: star.x - i * 25,
          y: star.y - i * 3,
          life: 1 - (i / trailLength),
          size: 2 - (i / trailLength),
        });
      }
      
      const drawShootingStar = () => {
        shootingStars.forEach((trailStar, i) => {
          ctx.beginPath();
          ctx.arc(trailStar.x, trailStar.y, trailStar.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 200, ${trailStar.life * 0.8})`; // More yellowish color
          ctx.fill();
          
          trailStar.x -= 20; // Faster speed
          trailStar.y -= 2;
          trailStar.life -= 0.04;
        });
      };
      
      // Draw shooting star for a short time
      let shotDuration = 0;
      const shotInterval = setInterval(() => {
        if (shotDuration > 15) { // Shorter duration
          clearInterval(shotInterval);
        } else {
          drawShootingStar();
          shotDuration++;
        }
      }, 16);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with a semi-transparent overlay for trail effect
      ctx.fillStyle = 'rgba(10, 20, 38, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula-like background
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.8
      );
      nebulaGradient.addColorStop(0, 'rgba(25, 25, 112, 0.1)');
      nebulaGradient.addColorStop(0.3, 'rgba(106, 90, 205, 0.08)');
      nebulaGradient.addColorStop(0.6, 'rgba(75, 0, 130, 0.06)');
      nebulaGradient.addColorStop(1, 'rgba(25, 25, 112, 0.04)');
      
      ctx.fillStyle = nebulaGradient;
      ctx.globalAlpha = 0.3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1.0;
      
      // Draw mouse glow effect
      const mouseGlow = ctx.createRadialGradient(
        mousePositionRef.current.x, mousePositionRef.current.y, 0,
        mousePositionRef.current.x, mousePositionRef.current.y, 100
      );
      mouseGlow.addColorStop(0, 'rgba(100, 100, 255, 0.15)');
      mouseGlow.addColorStop(0.5, 'rgba(75, 0, 130, 0.08)');
      mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;
      
      starsRef.current.forEach((star, index) => {
        // Move stars based on mouse position
        const dx = star.x - centerX;
        const dy = star.y - centerY;
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        
        // Calculate parallax effect
        const parallaxX = (dx / maxDistance) * 2 * (mouseX - centerX) * 0.001;
        const parallaxY = (dy / maxDistance) * 2 * (mouseY - centerY) * 0.001;
        
        // Update star position with parallax
        star.x += parallaxX;
        star.y += parallaxY;
        
        // Reset stars that go off screen
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = star.originalZ;
        }
        
        // Twinkling effect
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6;
        const brightness = star.brightness * twinkle;
        
        // Draw star
        ctx.beginPath();
        const radius = Math.max(0.3, star.size * (1 - star.z / 800));
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        
        // Create a glow effect for stars
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, radius * 4
        );
        
        // Set star color based on type
        const red = star.color === 'white' ? 255 : star.color === '#FFFFE0' ? 255 : 240;
        const green = star.color === 'white' ? 255 : star.color === '#FFFFE0' ? 255 : 248;
        const blue = star.color === 'white' ? 255 : star.color === '#FFFFE0' ? 224 : 255;
        
        gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${brightness})`);
        gradient.addColorStop(0.5, `rgba(${red}, ${green}, ${blue}, ${brightness * 0.6})`);
        gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw constellation-like connections
          // Draw constellation-like connections occasionally
        if (Math.random() < 0.0015) {  // Even less frequent
          drawConstellationLines(ctx, star, index);
        }
        
        // Occasionally create shooting stars
        if (Math.random() < 0.001) {
          createShootingStar(index);
        }
        

      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at bottom, #0a1426 0%, #08101d 30%, #060a14 60%, #04060c 100%)' }}
    />
  );
};

export default StarField;