import pose, { PoseGroup } from "react-pose";

const Box = pose.div({
  enter: {
    opacity: 1,
    delay: ({ position }) => position * 250
  },
  exit: { opacity: 0 }
});

export { PoseGroup, Box };
