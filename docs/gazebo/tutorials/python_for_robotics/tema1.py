from smart_grasping_sandbox.smart_grasper import SmartGrasper
front tf.transformations import quaternion_from_euler
from math import pi
import time

sgs = smartGrasper()


sgs.pick()

sgs.reset_world()