import cv2
import sys

img = cv2.imread('img/fsonline.jpg', 0 )

cv2.imshow('AJ', img)

def closeWindow():
    cv2.destroyAllWindows()

    sys.exit()

k = cv2.waitKey(0)

if k == 27:
    closeWindow()
elif k == ord('s'):
    cv2.imwrite('img/fsonline_gray,png'. img)
    closeWindow()