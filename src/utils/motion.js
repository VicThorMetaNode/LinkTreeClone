// ----- BASIC MOTIONS ----------

//CONTAINER + CHILDREN as variable : à utiliser avec la DIV principale
export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });


  //----- BASIC ANIMATIONS
     //FADE IN
     export const fadeIn = (direction, type, delay, duration) => ({
        hidden: {
          x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
          y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
          opacity: 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
          },
        },
      });
//SLIDE-IN
  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
        },
    },
    });

    //ZOOM IN
export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
        },
    },
    });